import axios from "axios";

// Define your base API URLs for different endpoints
const BASE_URL = {
  applications:
    "https://659318f3bb12970719905d89.mockapi.io/api/v1/applications",
  admins: "https://659318f3bb12970719905d89.mockapi.io/api/v1/admins",
};

const createApi = (endpoint) => {
  const api = axios.create({
    baseURL: BASE_URL[endpoint],
  });

  const get = async (url) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error getting data from ${url}:`, error.message);
      throw error;
    }
  };

  const post = async (url, data) => {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating data at ${url}:`, error.message);
      throw error;
    }
  };

  const put = async (url, data) => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating data at ${url}:`, error.message);
      throw error;
    }
  };

  const del = async (url) => {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error) {
      console.error(`Error deleting data at ${url}:`, error.message);
      throw error;
    }
  };

  return {
    get,
    post,
    put,
    delete: del,
  };
};

// Create API instances for different endpoints
export const applicationsApi = createApi("applications");
export const adminsApi = createApi("admins");
