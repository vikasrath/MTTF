import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const generateTokenAndSetCookie =  (user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "45d",
  });

    cookies().set("token", token, {
    httpOnly: true, 
    sameSite: "Strict", 
    maxAge: 45 * 24 * 60 * 60, 
    path: "/", 
  });

  return token; 
};
