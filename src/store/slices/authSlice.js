import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  user: {},
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initValue,
  reducers: {
    handleLogin: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.user = {};
      state.isAuth = false;
    },
  },
});

export const { handleLogin, logout } = authSlice.actions;
export default authSlice.reducer;
