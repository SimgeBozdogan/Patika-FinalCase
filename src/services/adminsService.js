import { adminApi } from "./api";

// Function to get all submissions
export const getAllSubmissions = async () => {
  return await adminApi.get("/");
};
