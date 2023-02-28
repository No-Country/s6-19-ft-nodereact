import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// const user = JSON.parse(localStorage.getItem("user") || "");
// const email = JSON.parse(localStorage.getItem("email") || "");
// const token = JSON.parse(localStorage.getItem("token") || "");

interface AuthState {
  user: string;
  // email: string;
  // token: string;
}

const initialState: AuthState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "",
  // email: email ? email : "",
  // token: token ? token : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user, email } = action.payload;

      state.user = user;
      // state.token = token;
      // state.email = email;

      console.log(action.payload);

      localStorage.setItem("user", JSON.stringify(user));
      // localStorage.setItem("email", JSON.stringify(email));
      // localStorage.setItem("token", JSON.stringify(token));
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
