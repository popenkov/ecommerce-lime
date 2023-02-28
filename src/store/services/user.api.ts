import axios from "axios";

const baseUrlValue =
  process.env.NODE_ENV === "development" ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_HEROKU_URL;

export const UserService = {
  async getUsersData() {
    try {
      const response = await axios.get(`${baseUrlValue}/users`);

      return response;
    } catch (err) {
      console.log("error", err);
    }
  },
};
