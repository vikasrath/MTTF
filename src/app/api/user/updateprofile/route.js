import { NextResponse } from "next/server";
import User from "@/Model/user";
import dbConnect from "@/lib/dbConnect";
export async function POST(req) {
    try {
        await dbConnect(); 

        const body = await req.json();
         console.log(body)
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
            user: {
                name: updatedUser.name || "",
                memberId: updatedUser.memberId || "",
                registrationDate: updatedUser.registrationDate || "",
                phone: updatedUser.phone || "",
                email: updatedUser.email || "",
                department: updatedUser.department || "",
                university: updatedUser.university || "",
                jobTitle: updatedUser.jobTitle || "",
                researchField: updatedUser.researchField || "",
                technicalExperience: updatedUser.technicalExperience || "",
                teachingExperience: updatedUser.teachingExperience || "",
                researchExperience: updatedUser.researchExperience || "",
                linkedin: updatedUser.linkedin || "",
                googleScholar: updatedUser.googleScholar || "",
                researchGate: updatedUser.researchGate || "",
                otherProfile: updatedUser.otherProfile || ""
            },
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
