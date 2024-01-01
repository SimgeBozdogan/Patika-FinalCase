import axios from 'axios';

const BASE_URL = 'https://659318f3bb12970719905d89.mockapi.io/api/v1'; // Replace with your API base URL

const api = axios.create({
  baseURL: `${BASE_URL}/submission`,
});

// Function to get submissions
export const getSubmissions = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error getting submissions:', error.message);
    throw error;
  }
};

// Function to get submission by id
export const getSubmissionById = async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error getting submissions:', error.message);
      throw error;
    }
  };

// Function to delete a submission by ID
export const deleteSubmission = async (submissionId) => {
  try {
    const response = await api.delete(`/${submissionId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting submission:', error.message);
    throw error;
  }
};

// Function to update a submission by ID
export const updateSubmission = async (submissionId, updatedData) => {
  try {
    const response = await api.put(`/${submissionId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating submission:', error.message);
    throw error;
  }
};

// Function to create a new submission
export const createSubmission = async (newData) => {
  try {
    const response = await api.post('/', newData);
    return response.data;
  } catch (error) {
    console.error('Error creating submission:', error.message);
    throw error;
  }
};

export default api;
