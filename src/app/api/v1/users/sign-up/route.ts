import { resendVerifyMail } from "@/helpers/resendVerifyMail";
import userModel from "@/models/userModel";

// ApiResponse(Response, statuscode,message,data)
export async function POST(request: Request) {
  // await dbconnect()
  try {
    const { userName, email, password } = await request.json();
    const existingUserWithVerified = await userModel.findOne({
      userName,
      isVerified: true,
    });
    if (existingUserWithVerified) {
      return Response.json({ error: "user is already exist" }, { status: 400 });
    }
    const existingUserByMail = await userModel.findOne({ email });
    if (existingUserByMail) {
      true;
    } else {
      const hashedPassword = await crypto;
      //craete hash password and semd mail and save user
    }
    return Response.json({ messgae: "hi" }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return Response.json(
      { error: "something went wrong in SignUp" },
      { status: 500 }
    );
  }
}
