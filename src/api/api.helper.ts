import axios from "axios";

export const axiosClassic = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_HEROKU_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
