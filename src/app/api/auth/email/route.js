import { NextResponse } from "next/server";
import User from "@/Model/user";
import dbConnect from "@/lib/dbConnect";
import { Resend } from "resend";
import EmailTemplate from "@/components/emailTemplate/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();
        const { email } = body;

        // Check if email is provided
        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: "Email already exists" }, { status: 409 });
        }

        // Generate OTP
        const otp_code = generateOTP();

        // Send email with OTP
        const { error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [email], // Send OTP to the provided email
            subject: "Your OTP Code",
            react: <EmailTemplate firstName={otp_code} />, // Assuming EmailTemplate can accept OTP
        });

        if (error) {
            console.error("Email sending error:", error);
            return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
        }

        return NextResponse.json({ otp: otp_code, message: "OTP sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("Internal Server Error:", error);
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}

// OTP Generator Function
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
}
