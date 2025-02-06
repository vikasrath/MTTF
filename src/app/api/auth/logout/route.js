import { NextResponse } from 'next/server';

export async function GET(req) {
    
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Ensure secure flag is used in production
    sameSite: 'Strict', // Secure the cookie to prevent CSRF
    maxAge: -1, // Expire the cookie
  });

  // Return the response indicating successful logout
  return response;
}
