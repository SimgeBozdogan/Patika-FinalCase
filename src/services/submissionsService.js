import { submissionsApi } from "./api";

// Function to get all submissions
export const getAllSubmissions = async () => {
  return await submissionsApi.get("/");
};

// Function to get submission by id
export const getSubmissionById = async (id) => {
  return await submissionsApi.get(`/${id}`);
};

// Function to create a new submission
export const createSubmission = async (newData) => {
  return await submissionsApi.post("/", newData);
};
