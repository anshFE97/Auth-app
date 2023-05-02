import axios from "axios";

const API_URL = "http://localhost:8000/api/profile/";

// create profile
const createProfile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, profileData, config);

  return response.data;
};

// get profile data
const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// update profile
const updateProfile = async (updateData, id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.put(API_URL + id, updateData, config)

  return response.data
}

const profileService = { createProfile, getProfile, updateProfile };

export default profileService