import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// const email = JSON.parse(localStorage.getItem("email") || "");
// const token = JSON.parse(localStorage.getItem("token") || "");

interface AuthState {
  email?: string;
  token?: string;
}

const initialState: AuthState = {
  email: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
        })
      );
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
      localStorage.setItem("user", JSON.stringify({}));
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
