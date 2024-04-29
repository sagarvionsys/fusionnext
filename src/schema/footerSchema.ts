import {z} from "zod";

export const footerSchema = z.object({
    name: z
      .string()
      .min(5, { message: "Name must be atleast 5 characters" })
      .max(20, { message: "Name must be no more than 20 characters" }),

    email: z.string().email({ message: "Invalid email address" }),

    subject: z
      .string()
      .min(6, { message: "Subject must be atleast 6 characters" })
      .max(20, { message: "Subject must be no more than 20 characters" }),

     messag: z
      .string()
      .min(6, { message: "Message must be atleast 6 characters" })
      .max(50, { message: "Message must be no more than 50 characters"})
  });


