import { createSlice } from "@reduxjs/toolkit";

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
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
