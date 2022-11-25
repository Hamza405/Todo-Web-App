import { createSlice } from "@reduxjs/toolkit";

const key = "user";

const initValue = {
  user: JSON.parse(localStorage.getItem(key)) || null,
  isAuth: !!JSON.parse(localStorage.getItem(key)),
};

// const calRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpireationTime = new Date(expirationTime).getTime();
//   const result = adjExpireationTime - currentTime;
//   return result;
// };

const authSlice = createSlice({
  name: "auth",
  initialState: initValue,
  reducers: {
    handleLogin: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(key, JSON.stringify(action.payload));
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem(key);
      state.isAuth = false;
    },
  },
});

export const { handleLogin, logout } = authSlice.actions;
export default authSlice.reducer;
