import axios from 'axios';

export const axiosConfig = {
  headers: {
    authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`,
  },
};

export const login = async (email, password) => {
  try {
    const res = await axios.post("https://09-api-node.vercel.app/auth", {
      email,
      password,
    });
    const token = res.data.token;
    localStorage.setItem('token', token);
    axiosConfig.headers.authorization = `Bearer ${token}`;
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  axiosConfig.headers.authorization = '';
};