import axios from "axios";

const API_URL = "http://localhost:8000/api/upload/";

// create profile
const createProfile = async (formData, token) => {
  const response = await axios.post(API_URL, formData, token);

  return response.data;
};

const uploadService = { createProfile };

export default uploadService;
