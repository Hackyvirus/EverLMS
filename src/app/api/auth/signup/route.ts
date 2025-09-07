import DBConnect from "@/app/lib/dbConnect";
import userModel from "@/app/model/User.model";
import userSchema from "@/app/schemas/userSchema";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userName, email, phoneNumber, password } = body;

    // ✅ Validate with Zod
    const validatedData = userSchema.parse({ userName, email, phoneNumber, password });

    // ✅ Connect DB
    await DBConnect();

    // ✅ Save new user
    const newUser = await userModel.create(validatedData);

    return NextResponse.json({ message: "User created", user: newUser }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error while creating user:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Validation failed", error: error.message }, // ✅ no TS error now
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
