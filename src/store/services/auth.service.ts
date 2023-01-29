import axios from "axios";

import { saveToStorage } from "./auth.helper";

const baseUrlValue =
  process.env.NODE_ENV === "development" ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_HEROKU_URL;

export const AuthService = {
  async register(email: string, password: string, name: string, surname: string) {
    const response = await axios.post(`${baseUrlValue}/register`, {
      email,
      password,
      name,
      surname,
    });

    if (response.data.token) {
      saveToStorage("userToken", response.data.token);
    }

    return response;
  },

  async login(email: string, password: string) {
    const response = await axios.post(`${baseUrlValue}/auth`, {
      email,
      password,
    });

    if (response.data.token) {
      saveToStorage("userToken", response.data.token);
    }

    return response;
  },

  logout() {
    localStorage.removeItem("userToken");
  },
};
