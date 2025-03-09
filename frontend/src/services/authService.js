import axios from "axios";

const API_URL = "https://localhost:8080/skillsyncedu";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Error de conexión";
  }
};
