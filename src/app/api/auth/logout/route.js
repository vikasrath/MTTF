import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    expires: new Date(0), 
  });

  return response;
}
