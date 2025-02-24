import dbConnect from "@/lib/dbConnect";
import User from "@/Model/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Resend } from "resend";
import EmailTemplate from "@/components/emailTemplate/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        await dbConnect();
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (user) {
            const otp_code = generateOTP();
            const { data, error } = await resend.emails.send({
                from: 'sourabh@mttfhub.com',
                to: [email],
                subject: "Hello world",
                react: <EmailTemplate firstName={otp_code} />,
            });

            if (error) {
                return Response.json({ error }, { status: 500 });
            }

            return Response.json({ otp : otp_code }, { status: 200 });
        }
    } catch (error) {
        console.error("Error checking email:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


export async function PATCH(req) {
    try {
        const { email, newPassword } = await req.json();

        if (!email || !newPassword) {
            return NextResponse.json({ error: "Email and new password are required" }, { status: 400 });
        }

        await dbConnect(); // Ensure database connection

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Find the user by email and update the password
        const user = await User.findOneAndUpdate(
            { email },
            { password: hashedPassword },
            { new: true } // Return the updated document
        );

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Password updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating password:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}


function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}