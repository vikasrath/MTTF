import { NextResponse } from "next/server";
import User from "@/Model/user";
import dbConnect from "@/lib/dbConnect";
export async function POST(req) {

    await dbConnect();


    const body = await req.json();
    const { email } = body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        
        return NextResponse.json({ message: "Email Already exist" });
    }


    const otp_code = generateOTP(); // generating OTP
    const templateId = "template_hv4iq1i"
    const serviceId = "service_7jz4ehr"
    const publickey = "EOonM8mjwQrqaZtuI"


    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publickey,
        template_params: {
            name: email,  
            otp_code: otp_code.toString()  // Convert OTP to string
        }
    };

    
    try {
          console.log("working");
          
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });


        if (response.ok) {
            return NextResponse.json({ message: "OTP sent successfully", otp: otp_code},{status:200});
        } else {
            const errorData = await response.json();
      
            return NextResponse.json({ message: "Failed to send OTP", error: errorData.text }, { status: 500 })
        }
    } catch (error) {
         console.error(error);
         return NextResponse.json({ message: "Oops... Something went wrong!" }, { status: 500 })
        
    }


};


function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}