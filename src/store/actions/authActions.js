import { authStorageKey } from "../../utils/constants";
import {
  loginRequest,
  registerRequest,
  updateProfile,
} from "../../api/auth-api";
import { handleLogin } from "../slices/authSlice";
import { setLoading } from "../slices/uiSlice";

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
      dispatch(setLoading(false));
    } catch (e) {
      console.log(e);
      dispatch(setLoading(false));
    }
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
    } catch (e) {
      console.log(e);
    }
  };
};
