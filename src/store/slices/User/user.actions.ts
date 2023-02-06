import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

import { AuthService } from "@src/store/services/auth.api";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  email: string;
  password: string;
};

export const register = createAsyncThunk<any, RegisterData>("auth/register", async ({ email, password }, thunkAPI) => {
  try {
    const response = await AuthService.register(email, password);
    if (response.status === 200) {
      const { email } = jwt_decode(response.data.accessToken) as { email: string };
      const user = {
        email,
        token: response.data.accessToken,
      };

      localStorage.setItem("user", JSON.stringify(user));
    }
    return response;
  } catch (error) {
    toast.error("Ошибка регистрации");
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk<any, LoginData>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const response = await AuthService.login(email, password);

    if (response.status === 200) {
      const { email } = jwt_decode(response.data.accessToken) as { email: string };
      const user = {
        email,
        token: response.data.accessToken,
      };

      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Регистрация успешна");
      return response.data;
    }
  } catch (error) {
    toast.error("Ошибка авторизации");
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});
