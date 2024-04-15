import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isVerified: boolean;
  verifyCode: string;
  verifyCodeExpire: Date;
  role: string;
}

const userScheama: Schema<User> = new Schema({
  userName: {
    type: String,
    trim: true,
    required: [true, "userName is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  confirmPassword: {
    type: String,
    required: [true, "confirm Password is required"],
  },
  isVerified: {
    type: Boolean,
    defoult: false,
  },
  verifyCode: {
    type: String,
  },
  verifyCodeExpire: {
    type: Date,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    defoult: "user",
  },
});

const userModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userScheama);

export default userModel;
