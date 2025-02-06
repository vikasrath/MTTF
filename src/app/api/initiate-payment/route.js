import axios from "axios";
import { generateTokenAndSetCookie } from "@/utils/generateTokenAndSetCookie";
import { hashPassword } from "@/utils/hashPassword";
import User from "@/Model/user";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {

  await dbConnect()
  const body = await req.json();

  const { fullName, email, phone, password, membershipType, institutionalamount } = body;

  const amount = membershipType === "individual" ? 2000 : Number(institutionalamount);

  const orderId = `order_${Date.now()}`;

  try {

    const hashedPassword = await hashPassword(password);

    // Creating a new user
    const newUser = new User({
      name: fullName,
      email,
      phone,
      orderId,
      password: hashedPassword,
    });

    // Saving the new user to the database
    await newUser.save();
  console.log("newUser",newUser);
    generateTokenAndSetCookie(newUser);


    const cashfreeResponse = await axios.post(
      "https://api.cashfree.com/pg/orders",
      {
        orderId: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: { customer_id: newUser._id, customer_phone: phone, customer_name: fullName, customer_email: email },
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

    // console.log(cashfreeResponse.data);


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
