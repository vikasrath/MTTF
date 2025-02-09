"use server"
import mongoose from "mongoose";

const dbConnect = async () => {

  const MONGODB_URI = process.env.MONGODB_URI

  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default dbConnect;
