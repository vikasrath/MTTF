import { NextResponse } from "next/server";
import User from "@/Model/user";
import dbConnect from "@/lib/dbConnect";
export async function POST(req) {

    await dbConnect();


    const body = await req.json();
    const { email } = body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        
        return NextResponse.json({ available: false });
    } else {
        return NextResponse.json({ available: true, templateId: process.env.TemplateId, serviceId: process.env.ServiceId, publickey:process.env.Publickey})
    }
};


