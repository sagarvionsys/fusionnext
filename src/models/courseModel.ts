import mongoose, { Schema, Document } from "mongoose";

interface courseTools {
  id: number;
  title: string;
}

export interface Course extends Document {
  courseImage: string;
  courseTitle: string;
  courseOverview: string;
  courseDuration: string;
  courseMode: string;
  courseBrochure: string;
  courseTools: [courseTools];
}

const courseSchema: Schema<Course> = new Schema({
  courseImage: {
    type: String,
    required: [true, "Course Image is required"],
  },
  courseTitle: {
    type: String,
    required: [true, "Course Title is required"],
  },
  courseOverview: {
    type: String,
    required: [true, "Course Overview is required"],
  },
  courseDuration: {
    type: String,
    required: [true, "Course Duration is required"],
  },
  courseMode: {
    type: String,
    required: [true, "BatchTime is required"],
  },
  courseBrochure: {
    type: String,
    required: [true, "Course Brochure is required"],
  },
  courseTools: {
    type: [String],
    required: [true, "Course Tools are required"],
  },
});

const courseModel =
  (mongoose.models.Course as mongoose.Model<Course>) ||
  mongoose.model<Course>("Course", courseSchema);

export default courseModel;
