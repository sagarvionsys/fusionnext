import jwt from "jsonwebtoken";

const useGetUserIdRole = (token: string) => {
  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "");

    if (!decodedToken) {
      throw new Error("Invalid token or token is expired");
    }
    const { id, role } = decodedToken as { id: string; role: string };
    return { id, role };
  }
  return { id: undefined, role: undefined };
};

export default useGetUserIdRole;
