import { z } from "zod";

export const SignUpSchema = z
  .object({
    userName: z
      .string()
      .min(5, { message: "Username must be atleast 5 characters" })
      .max(20, { message: "Username must be no more than 20 characters" })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username must not contain any special characters",
      }),

    email: z.string().email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),

    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password must be atleast 6 characters" }),
  })
  .refine(
    (values) => {
      return values?.password === values?.confirmPassword;
    },
    {
      message: "Password and Confirm Password must match!",
      path: ["confirmPassword"],
    }
  );
