import { saveToStorage } from "@src/utils/localStorage";
import axios from "axios";

const baseUrlValue =
  process.env.NODE_ENV === "development" ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_HEROKU_URL;

export const AuthService = {
  async register(email: string, password: string) {
    const response = await axios.post(`${baseUrlValue}/register`, {
      email,
      password,
    });

    return response;
  },

  async login(email: string, password: string) {
    const response = await axios.post(`${baseUrlValue}/login`, {
      email,
      password,
    });

    return response;
  },

  logout() {
    localStorage.removeItem("userToken");
  },
};
