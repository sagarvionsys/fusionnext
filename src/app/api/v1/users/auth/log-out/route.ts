import { NextResponse } from "next/server";

export async function GET() {
  try {
    const responce = NextResponse.json(
      { status: "success", message: "Log Out succcesfully" },
      { status: 200 }
    );
    responce.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return responce;
  } catch (error) {
    console.log("logout error - ", error);
    return Response.json(
      { status: "failed", error: "something went wrong in logout" },
      { status: 500 }
    );
  }
}
