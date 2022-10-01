import { createSlice } from "@reduxjs/toolkit";
import { dateGenerator, colorGenerator } from "../Componenets/Functions";

const initialCommentState = {
  comment: {
    text: "",
    date: "",
    color: "",
  },
  isShowNewComment: false,
  isShowComments: false,
  postIndex: 0,
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialCommentState,
  reducers: {
    openNewComment(state, action) {
      state.isShowNewComment = true;
      state.postIndex = action.payload;
    },
    closeNewComment(state) {
      state.isShowNewComment = false;
    },
    onChangeComment(state, action) {
      state.comment.text = action.payload;
    },
    setComment(state) {
      state.comment.date = dateGenerator();
      state.comment.color = colorGenerator();
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
