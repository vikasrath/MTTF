"use server"

import User from "../Model/user.js";
import dbConnect from "../lib/dbConnect.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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
    await  loginUser({ email, password });
    return  newUser;

  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User registration failed");
  }
};

export const loginUser = async ({ email, password }) => {
  const cookie = cookies();
  await dbConnect();

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return {error: "Invalid Email or Password" };
  }

  const isMatch = await comparePassword(password, existingUser.password);

  if (!isMatch) {
    return "Invalid Email or Password";
  }

  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: "45d",
  });

  cookie.set("token", token, {
    httpOnly: true, 
    
    sameSite: "Strict", 
    maxAge: 45 * 24 * 60 * 60,
});

console.log("cookie", cookie);


  return  { status : "ok", message: "Login successfully", user: existingUser };

}
