import axiosInstance from "./axios";

const login = async (username, password) => {
  try {
    const response = await axiosInstance.post("/user/login", {
      username,
      password,
    });
    return response.data; // Return the response data on successful login
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

export default { login };
