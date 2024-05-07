import dbConnect from "@/database/dbconnect";
import batchModel from "@/models/batchModel";

export async function GET() {
  await dbConnect();
  try {
    const allBatches = await batchModel.find({});

    return Response.json(
      { status: "success", batches: allBatches },
      { status: 200 }
    );
  } catch (error) {
    console.log("Fetch Batches error - ", error);
    return Response.json(
      { status: "failed", error: "Something went wrong in fetching batches" },
      { status: 500 }
    );
  }
}
