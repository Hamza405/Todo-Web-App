import { authStorageKey } from "../../utils/constants";
import {
  loginRequest,
  registerRequest,
  updateProfile,
} from "../../api/auth-api";
import { handleLogin } from "../slices/authSlice";
import { setLoading } from "../slices/uiSlice";
import { showNotification } from "../slices/uiSlice";

export const login = (inputData) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await loginRequest(inputData);

      dispatch(
        handleLogin({
          displayName: res.displayName,
          email: res.email,
          token: res.idToken,
          userId: res.localId,
        })
      );
      dispatch(
        showNotification({
          message: "Welcome again",
          status: "success",
        })
      );
    } catch (e) {
      dispatch(
        showNotification({
          message: e.message,
          status: "error",
        })
      );
    }
    dispatch(setLoading(false));
  };
};

export const register = (inputData) => {
  return async (dispatch) => {
    try {
      const res = await registerRequest(inputData);
      const secondRes = await updateProfile({
        displayName: inputData.displayName,
        token: res.idToken,
      });
      dispatch(
        handleLogin({
          displayName: secondRes.displayName,
          email: res.email,
          token: res.idToken,
          userId: res.localId,
        })
      );
      dispatch(
        showNotification({
          message: "Welcome in todo app",
          status: "success",
        })
      );
    } catch (e) {
      dispatch(
        showNotification({
          message: e.message,
          status: "error",
        })
      );
    }
    dispatch(setLoading(false));
  };
};
