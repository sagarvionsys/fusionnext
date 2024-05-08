import dbConnect from "@/database/dbconnect";
import isAdmin from "@/helpers/isAdmin";
import batchModel from "@/models/batchModel";
import { NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  await dbConnect();
  try {
    isAdmin(request);
    const { searchParams } = new URL(request.url);
    const batchId = searchParams.get("batchId");

    const AvailableBatch = await batchModel.findById(batchId);

    if (!AvailableBatch) {
      return Response.json(
        { status: "failed", error: "Batch not exist or already deleted" },
        { status: 404 }
      );
    }

    await batchModel.findByIdAndDelete(batchId);

    return Response.json(
      { status: "success", message: "Batch Deleted Succesfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Delete Batch error - ", error);
    return Response.json(
      {
        status: "failed",
        error: error?.message || "something went wrong in Deleting Batch",
      },
      { status: 500 }
    );
  }
}
