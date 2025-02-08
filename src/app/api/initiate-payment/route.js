import axios from "axios";
import { generateTokenAndSetCookie } from "@/utils/generateTokenAndSetCookie";
import { hashPassword } from "@/utils/hashPassword";
import User from "@/Model/user";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
    try {
        // Connect to the database
        await dbConnect();

        // Parse the request body
        const body = await req.json();
        const { fullName, email, phone, password, membershipType, institutionalamount } = body;

        if (!fullName || !email || !phone || !password || !membershipType) {
            return new Response(
                JSON.stringify({ message: "Missing required fields" }),
                { status: 400 }
            );
        }

        // 🌍 Detect Country via IP-based Geolocation
        let country = "Unknown";
        try {
            // Get client IP (Vercel uses x-forwarded-for)
            const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "8.8.8.8";
            console.log("Detected IP:", ip);

            // Use IPInfo for geolocation (Replace with your API token stored in .env)
            const geoRes = await fetch(`https://ipinfo.io/${ip}/json?token=${process.env.IPINFO_TOKEN}`);
            const geoData = await geoRes.json();

            country = geoData.country || "Unknown";
        } catch (geoError) {
            console.error("Failed to fetch country info:", geoError.message);
        }

        console.log("Detected Country:", country);

        // Determine membership amount
        const amount = membershipType === "individual" ? 2000 : Number(institutionalamount);
        const orderId = `order_${Date.now()}`;

        // Hash the user's password
        const hashedPassword = await hashPassword(password);

        // Create a new user in the database
        const newUser = new User({
            name: fullName,
            email,
            phone,
            orderId,
            password: hashedPassword,
            country, // Store country info
        });

        await newUser.save();

        // Generate token and set cookie
        generateTokenAndSetCookie(newUser);

        // Ensure Cashfree credentials are available
        if (!process.env.CASHFREE_CLIENT_ID || !process.env.CASHFREE_CLIENT_SECRET) {
            return new Response(
                JSON.stringify({ message: "Cashfree API credentials are missing" }),
                { status: 500 }
            );
        }

        // 🌍 Adjust currency based on country
        const currency = country === "IN" ? "INR" : "USD";

        // Create payment order with Cashfree
        const cashfreeResponse = await axios.post(
            "https://api.cashfree.com/pg/orders",
            {
                orderId: orderId,
                order_amount: amount,
                order_currency: currency,
                customer_details: {
                    customer_id: newUser._id,
                    customer_phone: phone,
                    customer_name: fullName,
                    customer_email: email,
                },
                order_meta: {
                    return_url: "https://www.google.co.uk/",
                    notify_url: "https://paymentgateway-omega.vercel.app/api/verify-payment",
                }
            },
            {
                headers: {
                    "x-api-version": "2022-01-01",
                    "Content-Type": "application/json",
                    "x-client-id": process.env.CASHFREE_CLIENT_ID,
                    "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
                },
            }
        );

        // Return payment link
        return new Response(
            JSON.stringify({ paymentUrl: cashfreeResponse.data.payment_link }),
            { status: 200 }
        );

    } catch (error) {
        console.error("Error initiating payment:", error.response?.data || error.message);
        return new Response(
            JSON.stringify({ message: "Failed to initiate payment" }),
            { status: 500 }
        );
    }
}
