import dbConnect from "@/database/dbconnect";
import signToken from "@/helpers/signToken";
import userModel from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await dbConnect();
  const { email, password } = await request.json();
  try {
    const isUserExist = await userModel.findOne({ email });
    if (!isUserExist) {
      return Response.json(
        { status: "failed", error: "User not found, please Sign Up" },
        { status: 404 }
      );
    }

    const isCorrectPasswod = await bcrypt.compare(
      password,
      isUserExist?.password
    );
    if (!isCorrectPasswod) {
      return Response.json(
        { status: "failed", error: "invalid user credentials, try again" },
        { status: 401 }
      );
    }
    const token = signToken(isUserExist?._id, isUserExist?.role);

    const responce = NextResponse.json(
      { status: "failed", message: "User is SignIn succcesfully" },
      { status: 200 }
    );
    responce.cookies.set("token", token, {
      httpOnly: true,
    });
    return responce;
  } catch (error) {
    console.log("SignIn error - ", error);
    return Response.json(
      { status: "failed", error: "something went wrong in SignUp" },
      { status: 500 }
    );
  }
}
