import axios from "axios";
import { generateTokenAndSetCookie } from "@/utils/generateTokenAndSetCookie";
import { hashPassword } from "@/utils/hashPassword";
import User from "@/Model/user";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Connect to the database
        await dbConnect();

        // Parse the request body
        const body = await req.json();
        const { fullName, email, phone, password, membershipType, institutionalamount, country } = body;

        if (!fullName || !email || !phone || !password || !membershipType) {
            return new Response(
                JSON.stringify({ message: "Missing required fields" }),
                { status: 400 }
            );
        }

        // Determine membership amount
        const amount = Number(institutionalamount);
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
        const currency = country !== "IN" ? "USD" : "INR";

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
    

        return NextResponse.json({
            paymentUrl: cashfreeResponse.data.payment_link,
            user: {
                name: newUser.name || "",
                memberId: newUser.memberId || "",
                registrationDate: newUser.registrationDate || "",
                phone: newUser.phone || "",
                email: newUser.email || "",
                department: newUser.department || "",
                university: newUser.university || "",
                jobTitle: newUser.jobTitle || "",
                researchField: newUser.researchField || "",
                technicalExperience: newUser.technicalExperience || "",
                teachingExperience: newUser.teachingExperience || "",
                researchExperience: newUser.researchExperience || "",
                linkedin: newUser.linkedin || "",
                googleScholar: newUser.googleScholar || "",
                researchGate: newUser.researchGate || "",
                otherProfile: newUser.otherProfile || ""  
            }
        }, { status: 200 });
        
    } catch (error) {
        console.error("Error initiating payment:", error.response?.data || error.message);
        return new Response(
            JSON.stringify({ message: "Failed to initiate payment" }),
            { status: 500 }
        );
    }
}
