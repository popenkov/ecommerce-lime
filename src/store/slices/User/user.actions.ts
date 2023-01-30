import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@src/store/services/auth.api";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

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

      console.log(user);

      localStorage.setItem("user", JSON.stringify(user));
    }
    return response;
  } catch (error) {
    toast.error("Ошибка регистрации");
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk<
  // Return type of the payload creator
  any,
  // First argument to the payload creator
  LoginData
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const response = await AuthService.login(email, password);

    console.log(response);

    if (response.status === 200) {
      const { email } = jwt_decode(response.data.accessToken) as { email: string };
      const user = {
        email,
        token: response.data.accessToken,
      };

      console.log(user);

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
