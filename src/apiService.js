import axios from "axios";

const API_BASE_URL = "https://your-api-base-url.com"; // Replace with your actual API URL

const apiService = {
  get: async (endpoint, params = {}) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${endpoint}`, { params });
      return response.data;
    } catch (error) {
      console.error("API GET Error:", error);
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error("API POST Error:", error);
      throw error;
    }
  },

  put: async (endpoint, data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error("API PUT Error:", error);
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("API DELETE Error:", error);
      throw error;
    }
  }
};

export default apiService;
