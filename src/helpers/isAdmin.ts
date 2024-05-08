import useGetUserIdRole from "@/utils/useGetUserIdRole";
import { NextRequest } from "next/server";

const isAdmin = (request: NextRequest) => {
  const token = request.cookies.get("token")?.value || "";
  const { id, role } = useGetUserIdRole(token);
  console.log("the id is", id + "the role is", role);

  if (!role) {
    throw new Error("Invalid token or token is expired");
  }
  if (role !== "ADMIN") {
    throw new Error("Unauthorized access, you connot performe this action");
  }
  return role;
};

export default isAdmin;
