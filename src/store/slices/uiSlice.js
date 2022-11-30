import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    notification: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
      if (action.payload.status === "error") {
        toast.error(action.payload.message);
      }
      if (action.payload.status === "success") {
        toast.success(action.payload.message);
      }
    },
  },
});

export const { setLoading, showNotification } = uiSlice.actions;
export default uiSlice.reducer;
