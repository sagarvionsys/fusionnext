import VerificationEmailTemplate from "@/app/interface/VerificationEmailTemplate";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const resendVerifyMail = async (
  email: string,
  userName: string,
  verifyCode: string
) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Fusion Institude - Verify your email",
      react: VerificationEmailTemplate({ userName, otp: verifyCode }),
    });
  } catch (error) {
    throw new Error("Error in sending verification email");
  }
};
