import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import commentSlice from "./comment-slice";
import PostSlice from "./Post-slice";
import settingSlice from "./setting-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    post: PostSlice.reducer,
    comment: commentSlice.reducer,
    setting: settingSlice.reducer,
  },
});

export default store;
