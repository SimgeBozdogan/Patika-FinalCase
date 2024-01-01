import { adminsApi } from "./api";

// Function to get all admins
export const getAllAdmins = async () => {
  return await adminsApi.get("/");
};
