import dbConnect from "@/database/dbconnect";
import cloudinaryDelete from "@/helpers/cloudinaryDelete";
import isAdmin from "@/helpers/isAdmin";
import courseModel from "@/models/courseModel";
import { NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  await dbConnect();
  try {
    // isAdmin(request);

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");

    const course = await courseModel.findByIdAndDelete(courseId);
    if (!course) {
      return Response.json(
        {
          status: "failed",
          error: "The course is not found or already deleted",
        },
        { status: 401 }
      );
    }
    const courseImageUrl = course?.courseImage;
    await cloudinaryDelete(courseImageUrl);

    const coursePdfUrl = course?.courseBrochure;
    await cloudinaryDelete(coursePdfUrl);

    return Response.json(
      {
        status: "success",
        message: "course deleted successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("course Delete error - ", error);
    return Response.json(
      {
        status: "failed",
        error: error?.message || "something went wrong in Deleting course",
      },
      { status: 500 }
    );
  }
}
