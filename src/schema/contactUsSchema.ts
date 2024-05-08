import {z} from "zod";

export const contactUsSchema = z.object({
    firstName: z.string().min(5, { message: "First Name must be atleast 2 characters"})
    .max(50, { message: "First Name must be no more than 50 characters" }),
    lastName: z.string().min(5, { message: "Last Name must be atleast 2 characters"})
    .max(50, { message: ":ast Name must be no more than 50 characters" }),
      
    email: z.string().email({ message: "Invalid email address" }),

    phone: z.string().regex(/^\d{10}$/, { message: "Invalid phone number" }),
     
    message:z.string().min(1, { message: 'Message must not be empty' }).max(280, { message: 'Message must be less than 280 characters' })

    
});
