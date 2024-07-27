import mongoose from "mongoose";
import { parsedEnv } from "../env/env";

const connectToDB = async () => {
  try {
    await mongoose.connect(parsedEnv.MONGODB_URL);
    console.log("connected to MongoDB");
  } catch (error) {
    throw new Error("Failed to connect to mongoDb");
  }
};
export default connectToDB;
