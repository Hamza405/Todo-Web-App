import { authStorageKey } from "../../utils/constants";

export const handleLoginAction = (state, action) => {
  state.user = action.payload;
  localStorage.setItem(authStorageKey, JSON.stringify(action.payload));
  state.isAuth = true;
};

export const logoutAction = (state, action) => {
  state.user = null;
  localStorage.removeItem(authStorageKey);
  state.isAuth = false;
};
