"use server"

import { generateTokenAndSetCookie } from "@/utils/generateTokenAndSetCookie.js";
import User from "../Model/user.js";
import dbConnect from "../lib/dbConnect.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";

export const createUser = async ({ name, email, phone, orderId, password }) => {
  await dbConnect();

  const hashedPassword = await hashPassword(password);

  try {
    const newUser = new User({
      name,
      email,
      phone,
      orderId,
      password: hashedPassword,
    });

    await newUser.save();
    
    generateTokenAndSetCookie(newUser);  
    return newUser;

  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User registration failed");
  }
};

export const loginUser = async ({ email, password }) => {
  await dbConnect();

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return { error: "Invalid Email or Password" };
  }

  const isMatch = await comparePassword(password, existingUser.password);

  if (!isMatch) {
    return { error: "Invalid Email or Password" };
  }

  generateTokenAndSetCookie(existingUser);  // Corrected to use existingUser

  return { status: "ok", message: "Login successful", user: existingUser };
}
