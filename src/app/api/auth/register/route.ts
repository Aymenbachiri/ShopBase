import connectToDB from "@/lib/database/database";
import User from "@/lib/database/models/User";
import { registerUserSchema } from "@/lib/schemas/registerUserSchema";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const parsedBody = registerUserSchema.safeParse(body);

    if (!parsedBody.success) {
      return new NextResponse(
        JSON.stringify({
          errors: parsedBody.error.issues.map(
            (issue: { path: any[]; message: any }) => ({
              field: issue.path[0],
              message: issue.message,
            })
          ),
        }),
        { status: 400 }
      );
    }

    const { name, email, password } = parsedBody.data;

    await connectToDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: "Email is already registered" }),
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Input validation error:", error.issues);
      return new NextResponse(
        JSON.stringify({ error: error.issues[0].message }),
        { status: 400 }
      );
    } else {
      console.error("Error during user registration:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to register user" }),
        { status: 500 }
      );
    }
  }
};
