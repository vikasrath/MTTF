import dbConnect from "@/lib/dbConnect";
import User from "@/Model/user";

export async function POST(req) {
  try {
    // Parse JSON payload directly
    const payload = await req.json();

    // Ensure it's a PAYMENT_SUCCESS_WEBHOOK
    if (payload.type !== "PAYMENT_SUCCESS_WEBHOOK") {
      return new Response(null, { status: 400 });
    }

    // Extract customer ID
    const customerId = payload.data.customer_details?.customer_id;
    if (!customerId) {
      return new Response(null, { status: 400 });
    }

    // Connect to the database and update user
    await dbConnect();
    await User.findOneAndUpdate(
      { customerId: customerId }, // Assuming your User model has a customerId field
      { $set: { isMember: true } }
    );

    return new Response(null, { status: 200 }); // Required response for Cashfree
  } catch (error) {
    console.error("Webhook Processing Error:", error);
    return new Response(null, { status: 500 });
  }
}
