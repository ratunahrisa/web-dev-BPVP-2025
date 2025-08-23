import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllSiswa = async () => {
  try {
    const response = await axios.get(`${API_URL}/siswa`);
    return response.data;
  } catch (error) {
    console.error("Error fetching siswa:", error);
    throw error;
  }
};
