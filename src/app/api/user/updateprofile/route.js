import { NextResponse } from "next/server";
import User from "@/Model/user";
import dbConnect from "@/lib/dbConnect";
export async function POST(req) {
    try {
        await dbConnect(); 

        const body = await req.json();
        const {
            email, // Email se user ko identify karenge
            name,
            phone,
            department,
            university,
            jobTitle,
            researchField,
            technicalExperience,
            teachingExperience,
            researchExperience,
            linkedin,
            googleScholar,
            researchGate,
            otherProfile
        } = body;

        
        const updatedUser = await User.findOneAndUpdate(
            { email }, // Find user by email
            {
                name: name || existingUser.name,
                phone: phone || existingUser.phone,
                department: department || "",
                university: university || "",
                jobTitle: jobTitle || "",
                researchField: researchField || "",
                technicalExperience: technicalExperience || "",
                teachingExperience: teachingExperience || "",
                researchExperience: researchExperience || "",
                linkedin: linkedin || "",
                googleScholar: googleScholar || "",
                researchGate: researchGate || "",
                otherProfile: otherProfile || ""
            },
            { new: true } // Updated user return karega
        );

        return NextResponse.json({
            message: "User profile updated successfully",
            user: updatedUser,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
