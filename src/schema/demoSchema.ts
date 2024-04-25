import {z} from "zod";

export const demoSchema = z.object({
    name: z
    .string()
    .min(2,{message:"Name is required!"}).max(100),

    email:z
    .string().email({message:"Enter valid email!"}),

    phone:z
    .number().min(10,{message:"mobile number required!"}).max(10),

    
});
