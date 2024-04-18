import dbConnect from "@/database/dbconnect";
import userModel from "@/models/userModel";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { userName, email, password, confirmPassword } = await request.json();
    if (!userName || !email || !password || !confirmPassword) {
      return Response.json(
        { status: "failed", error: "all fields are required" },
        { status: 400 }
      );
    }
    if (password !== confirmPassword) {
      return Response.json(
        {
          status: "failed",
          error: "Password and Confirm password must be same",
        },
        { status: 400 }
      );
    }
    const existingUser = await userModel.findOne({
      email,
    });
    if (existingUser) {
      return Response.json(
        { status: "failed", error: "user is already exist,please login" },
        { status: 409 }
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      userName,
      email,
      password: hashedPassword,
    });
    return Response.json(
      { status: "success", message: "User is Signup successfully", newUser },
      { status: 201 }
    );
  } catch (error: any) {
    // console.log("Signup error - ", error);
    return Response.json(
      { status: "failed", error: "something went wrong in SignUp" },
      { status: 500 }
    );
  }
}
