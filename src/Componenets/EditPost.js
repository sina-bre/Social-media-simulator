import "./EditPost.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/Post-slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const title = useSelector((state) => state.post.post.title);
  const description = useSelector((state) => state.post.post.description);
  const showDeleteDialog = useSelector((state) => state.post.showDeleteDialog);
  const onChangeHandler = (e) => {
    dispatch(
      postActions.onChangePost({ key: e.target.name, value: e.target.value })
    );
  };
  const onClickEditHandler = () => {
    dispatch(postActions.editPost());
    dispatch(postActions.clear());
    navigate("/dashboard/admin/home");
  };

  const onClickDeleteHandler = () => {
    dispatch(postActions.toggleShowDialog());
  };
  return (
    <>
      <div className="editPost-container">
        <div className="editPost-header">
          <div className="editPost-head-icon-div">
            <Icon
              icon="fluent:comment-edit-24-filled"
              width="4rem"
              color="white"
              className="ediPost-head-icon"
            />
          </div>
          <div className="editPost-head-div">
            <h2 className="editPost-head">Edit Post</h2>
          </div>
        </div>
        <input
          type="text"
          placeholder="Post title"
          name="title"
          value={title}
          onChange={onChangeHandler}
        />
        <textarea
          rows="4"
          cols="10"
          placeholder="Description"
          name="description"
          value={description}
          onChange={onChangeHandler}
        />
        <div className="buttons-div">
          <button className="edit-post-button" onClick={onClickEditHandler}>
            Edit Post
          </button>
          <button className="delete-post-button" onClick={onClickDeleteHandler}>
            Delete
          </button>
          {showDeleteDialog && <DeleteDialog />}
        </div>
      </div>
    </>
  );
};

export default EditPost;
