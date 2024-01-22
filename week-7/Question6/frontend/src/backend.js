import axios from "axios";

const baseUrl = "http://localhost:3000";

const postEmail = async (email) => {
  try {
    const response = await axios.post(`${baseUrl}/otp`, { email });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const confirmOtp = async (otp, email) => {
  try {
    const response = await axios.post(`${baseUrl}/confirm`, { otp, email });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { postEmail, confirmOtp };
