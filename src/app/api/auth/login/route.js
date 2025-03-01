import { generateTokenAndSetCookie } from "@/utils/generateTokenAndSetCookie.js";
import dbConnect  from "../../../../lib/dbConnect";
import User  from "../../../../Model/user"
import { comparePassword } from "../../../../utils/hashPassword";
import { NextResponse } from 'next/server';

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and Password are required" },
      { status: 400 }
    );
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return NextResponse.json(
      { error: "Invalid Email or Password" },
      { status: 401 }
    );
  }

  const isMatch = await comparePassword(password, existingUser.password);

  if (!isMatch) {
    return NextResponse.json(
      { error: "Invalid Email or Password" },
      { status: 401 }
    );
  }

  generateTokenAndSetCookie(existingUser);

  //  successful login response gya
  return NextResponse.json(
    {
      status: "ok",
      message: "Login successful",
      user: {
        name: existingUser.name || "",
        memberId: existingUser.memberId || "",
        registrationDate: existingUser.registrationDate || "",
        phone: existingUser.phone || "",
        email: existingUser.email || "",
        department: existingUser.department || "",
        university: existingUser.university || "",
        jobTitle: existingUser.jobTitle || "",
        researchField: existingUser.researchField || "",
        technicalExperience: existingUser.technicalExperience || "",
        teachingExperience: existingUser.teachingExperience || "",
        researchExperience: existingUser.researchExperience || "",
        linkedin: existingUser.linkedin || "",
        googleScholar: existingUser.googleScholar || "",
        researchGate: existingUser.researchGate || "",
        otherProfile: existingUser.otherProfile || "",
        image: existingUser.image || ""  
    }
    },
    { status: 200 }
  );
}
