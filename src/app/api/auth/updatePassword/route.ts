import { updatePasswordSchema } from "@/lib/schemas/updatePasswordSchema";
import bcrypt from "bcryptjs";
import User from "@/lib/database/models/User";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/helpers/Auth";
import connectToDB from "@/lib/database/database";

export const PATCH = async (req: Request) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const userId = session.user.id;

    const reqBody = await req.json();
    const parsedBody = updatePasswordSchema.safeParse(reqBody);

    if (!parsedBody.success) {
      return NextResponse.json(
        {
          errors: parsedBody.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    const { currentPassword, password } = parsedBody.data;

    await connectToDB();
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { error: "Current password is incorrect" },
        { status: 401 }
      );
    }

    const hashedNewPassword = await bcrypt.hash(password, 10);

    await User.updateOne(
      { _id: userId },
      { $set: { password: hashedNewPassword } }
    );

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating password:", error);
    return NextResponse.json(
      { error: "Failed to update password" },
      { status: 500 }
    );
  }
};
