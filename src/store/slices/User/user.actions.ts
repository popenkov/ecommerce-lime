import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@src/store/services/auth.service";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  email: string;
  password: string;
  name: string;
  surname: string;
};

export const register = createAsyncThunk<any, RegisterData>(
  "auth/register",
  async ({ email, password, name, surname }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password, name, surname);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk<
  // Return type of the payload creator
  any,
  // First argument to the payload creator
  LoginData
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const response = await AuthService.login(email, password);
    if (response.data.success) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data.error);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});
