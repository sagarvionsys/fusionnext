import {z} from "zod";

export const demoSchema = z.object({
    name: z.string().min(5, { message: "Name must be atleast 2 characters"})

    .max(50, { message: "Name must be no more than 50 characters" }),

      email: z.string().email({ message: "Invalid email address" }),

      phone: z.string().regex(/^\d{10}$/, { message: "Invalid phone number. Phone number must be 10 digits." }),
     
      selectCourse: z.string().refine(value => {
        return value !== "" && value !== null && value !== undefined;
    }, { message: "Please select a course" })
    
});
