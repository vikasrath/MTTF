import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {

    const { publicId } = await req.json();

    if (!publicId) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Delete the image from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result !== "ok") {
      return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
    }

    return NextResponse.json({ message: "Image deleted successfully!" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
