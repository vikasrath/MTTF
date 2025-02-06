import { generateTokenAndSetCookie } from "@/utils/generateTokenAndSetCookie.js";
import User from "../Model/user.js";
import dbConnect from "../lib/dbConnect.js";
import { comparePassword } from "../utils/hashPassword.js";

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

  generateTokenAndSetCookie(existingUser);

  return { status: "ok", messaage: "Login successful", user: existingUser };
};
