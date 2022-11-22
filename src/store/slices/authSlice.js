import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  user: {},
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initValue,
  reducers: {},
});

export default authSlice;
