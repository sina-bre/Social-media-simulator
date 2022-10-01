import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  isAdmin: false,
  user: {
    username: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    onChange(state, action) {
      state.user[`${action.payload.key}`] = action.payload.value;
    },
    setIsAdmin(state, action) {
      state.isAdmin = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
