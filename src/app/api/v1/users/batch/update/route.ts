import dbConnect from "@/database/dbconnect";
import isAdmin from "@/helpers/isAdmin";
import batchModel from "@/models/batchModel";
import { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  await dbConnect();
  try {
    isAdmin(request);
    const { searchParams } = new URL(request.url);
    const batchId = searchParams.get("batchId");

    const partialUpdateData = await request.json();

    const updatedBatch = await batchModel.findByIdAndUpdate(
      batchId,
      { $set: partialUpdateData },
      { new: true }
    );

    if (!updatedBatch) {
      return Response.json(
        { status: "failed", error: "Batch not found or could not be updated" },
        { status: 404 }
      );
    }

    return Response.json(
      { status: "success", message: "Batch is updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Update Batch error - ", error);
    return Response.json(
      {
        status: "failed",
        error: error.message || "Something went wrong in updating the batch",
      },
      { status: 500 }
    );
  }
}
