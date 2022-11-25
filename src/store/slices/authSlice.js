import { createSlice } from "@reduxjs/toolkit";
import { handleLoginAction, logoutAction } from "../actions/authActions";
import { authStorageKey } from "../../utils/constants";

const initValue = {
  user: JSON.parse(localStorage.getItem(authStorageKey)) || null,
  isAuth: !!JSON.parse(localStorage.getItem(authStorageKey)),
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
    handleLoginAction,
    logoutAction,
  },
});

export const { handleLoginAction: handleLogin, logoutAction: logout } =
  authSlice.actions;
export default authSlice.reducer;
