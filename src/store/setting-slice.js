import { createSlice } from "@reduxjs/toolkit";

const initialSettingState = {
  isDarkMode: false,
  activeLimitedComments: false,
  isLimitedComments: false,
  limitedCommentsCount: 20,
  activeLimitedLikes: false,
  isLimitedLikes: false,
  limitedLikesCount: 20,
};

const settingSlice = createSlice({
  name: "setting",
  initialState: initialSettingState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleActiveLimitedComments(state) {
      state.activeLimitedComments = !state.activeLimitedComments;
      if (!state.activeLimitedComments) {
        state.isLimitedComments = false;
      }
    },
    toggleActiveLimitedLikes(state) {
      state.activeLimitedLikes = !state.activeLimitedLikes;
      if (!state.activeLimitedLikes) {
        state.isLimitedLikes = false;
      }
    },
    setLimitedCommentsCount(state, action) {
      state.limitedCommentsCount = action.payload;
    },
    setLimitedLikesCount(state, action) {
      state.limitedLikesCount = action.payload;
    },
    toggleIsLimitedComments(state) {
      state.isLimitedComments = !state.isLimitedComments;
    },
    toggleIsLimitedLikes(state) {
      state.isLimitedLikes = !state.isLimitedLikes;
    },
  },
});

export const settingActions = settingSlice.actions;
export default settingSlice;
