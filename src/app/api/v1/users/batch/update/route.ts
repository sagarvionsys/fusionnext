import dbConnect from "@/database/dbconnect";
import batchModel from "@/models/batchModel";

export async function PATCH(request: Request) {
  await dbConnect();
  try {
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
  } catch (error) {
    console.log("Update Batch error - ", error);
    return Response.json(
      { status: "failed", error: "Something went wrong in updating the batch" },
      { status: 500 }
    );
  }
}
