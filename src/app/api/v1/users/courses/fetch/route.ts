export async function GET() {
  try {
  } catch (error: any) {
    console.log("course fetch error - ", error);
    return Response.json(
      {
        status: "failed",
        error: error?.message || "something went wrong in fetching course",
      },
      { status: 500 }
    );
  }
}
