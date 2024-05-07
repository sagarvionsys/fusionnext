import dbConnect from "@/database/dbconnect";
import batchModel from "@/models/batchModel";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { batchName, batchDate, batchTime, batchType, batchStatus } =
      await request.json();

    if (!batchName || !batchDate || !batchTime || !batchType || !batchStatus) {
      return Response.json(
        { status: "failed", error: "All fields are required to add Batch" },
        { status: 401 }
      );
    }
    const NewBatch = await batchModel.create({
      batchName,
      batchTime,
      batchType,
      batchDate,
      batchStatus,
    });

    return Response.json(
      {
        status: "success",
        message: "New Batch Created Succesfully",
        NewBatch,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Batch Add error - ", error);
    return Response.json(
      { status: "failed", error: "something went wrong in Adding Batch" },
      { status: 500 }
    );
  }
}
