import useGetUserIdRole from "@/utils/useGetUserIdRole";
import { NextRequest } from "next/server";

const isAdmin = (request: NextRequest) => {
  const token = request.cookies.get("token")?.value || "";
  const { id, role } = useGetUserIdRole(token);

  if (role !== "ADMIN") {
    throw new Error("Unauthorized access, you cannot perform this action");
  }
  return role;
};

export default isAdmin;
