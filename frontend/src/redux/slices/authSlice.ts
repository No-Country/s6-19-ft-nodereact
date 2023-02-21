import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// const email = JSON.parse(localStorage.getItem("email") || "");
// const token = JSON.parse(localStorage.getItem("token") || "");

const initialState = {
  email: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
        })
      )

      const { email, token } = action.payload;
      state.email = email;
      state.token = token;


    },
    logout: (state) => {
      localStorage.clear();
      state.email = null;
      state.token = null;
    }
  },
});

export const selectAuth = (state:RootState) => state.auth

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
