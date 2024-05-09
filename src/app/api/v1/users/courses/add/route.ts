import dbConnect from "@/database/dbconnect";
import cloudinaryUpload from "@/helpers/cloudinaryUpload";
import isAdmin from "@/helpers/isAdmin";
import batchModel from "@/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    // isAdmin(request);

    const formData = await request.formData();
    const image = formData.get("courseImage") as File;
    const courseTitle = formData.get("courseTitle") as string;
    const courseOverview = formData.get("courseOverview") as string;
    const courseDuration = formData.get("courseDuration") as string;
    const courseMode = formData.get("courseMode") as string;
    const Brochure = formData.get("courseBrochure") as File;
    const courseTools = formData.get("courseTools") as string;

    const cloudinaryImageResult: any = await cloudinaryUpload(
      image,
      "Course-Images"
    );
    const cloudinaryPdfResult: any = await cloudinaryUpload(
      Brochure,
      "Course-Brochure"
    );
    const courseImage = cloudinaryImageResult?.secure_url;
    const courseBrochure = cloudinaryPdfResult?.secure_url;

    await batchModel.create({
      courseImage,
      courseTitle,
      courseOverview,
      courseDuration,
      courseMode,
      courseTools,
      courseBrochure,
    });

    return NextResponse.json(
      { status: "success", message: "upload successful" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("course Add error - ", error);
    return NextResponse.json(
      {
        status: "failed",
        error: error?.message || "something went wrong in Adding course",
      },
      { status: 500 }
    );
  }
}
