import { createSlice } from "@reduxjs/toolkit";
import {
  dateGenerator,
  colorGenerator,
  plusIndex,
} from "../Componenets/Functions";

const initialPostState = {
  post: {
    title: "",
    description: "",
    date: "",
    color: "",
    likesCount: 0,
    comments: [],
    index: -1,
    isExpandedComments: false,
  },
  posts: [
    {
      title: "",
      description: "",
      date: "",
      color: "",
      likesCount: 0,
      comments: [],
      index: -1,
      isExpandedComments: false,
    },
  ],
  postIndex: 0,
  showPost: false,
  showDeleteDialog: false,
};

const PostSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    onChangePost(state, action) {
      state.post[`${action.payload.key}`] = action.payload.value;
    },
    createPost(state) {
      state.post.date = dateGenerator();
      state.post.color = colorGenerator();
      if (state.post.index == -1) {
        state.posts.splice(0, 1, state.post);
      } else {
        state.posts.push(state.post);
      }
      state.post.index = plusIndex(state.post.index);
      state.showPost = true;
    },
    clear(state) {
      (state.post.title = ""), (state.post.description = "");
    },
    plusLikesCount(state, action) {
      state.posts[action.payload].likesCount++;
    },
    addCommentToPost(state, action) {
      state.posts[action.payload.postIndex].comments.push(
        action.payload.comment
      );
    },
    beforeEditPost(state, action) {
      state.post = state.posts[action.payload];
      state.postIndex = action.payload;
    },
    editPost(state) {
      state.posts.splice(state.postIndex, 1, state.post);
    },
    deletePost(state) {
      state.posts.splice(state.postIndex, 1);
      if (state.posts.length == 0) {
        state.showPost = false;
      }
    },
    toggleShowDialog(state) {
      state.showDeleteDialog = !state.showDeleteDialog;
    },
    toggleExpandedComments(state, action) {
      state.posts[action.payload].isExpandedComments =
        !state.posts[action.payload].isExpandedComments;
    },
  },
});

export const postActions = PostSlice.actions;
export default PostSlice;
