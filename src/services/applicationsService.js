import { applicationsApi } from "./api";

// Function to get all applications
export const getAllApplications = async () => {
  return await applicationsApi.get("/");
};

// Function to get application by id
export const getApplicationById = async (id) => {
  return await applicationsApi.get(`/${id}`);
};

// Function to create a new application
export const createApplication = async (newData) => {
  return await applicationsApi.post("/", newData);
};
