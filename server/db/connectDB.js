import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://nithin:nithin@cluster0.j5eip.mongodb.net/"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error: ", error);
  }
}
