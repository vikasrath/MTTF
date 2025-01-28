import axios from "axios";
import createUser from "@/controller/userController";

export async function POST(req) {

  const body = await req.json(); // Parse request body
  const { name, email, phone, amount } = body;

  const orderId = `order_${Date.now()}`;

  try {
    const newuser =  await createUser({name,email,phone,orderId});
    const cashfreeResponse = await axios.post(
      "https://api.cashfree.com/pg/orders",
      {
        orderId: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: { customer_id:newuser._id,customer_phone:phone,customer_name: name, customer_email: email },
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
