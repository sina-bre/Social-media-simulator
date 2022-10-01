import "./NewPost.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/Post-slice";
import { useEffect } from "react";

const NewPost = () => {
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(
      postActions.onChangePost({ key: e.target.name, value: e.target.value })
    );
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postActions.createPost());
    dispatch(postActions.clear());
  };
  const posts = useSelector((state) => state.post.posts);
  const title = useSelector((state) => state.post.post.title);
  const description = useSelector((state) => state.post.post.description);
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <>
      <form className="newPost-form" onSubmit={onSubmitHandler}>
        <div className="newPost-header">
          <div className="newPost-head-icon-div">
            <Icon
              icon="heroicons-solid:view-grid-add"
              width="4rem"
              color="#fff"
              className="newPost-head-icon"
            />
          </div>
          <div className="newPost-head-div">
            <h2 className="newPost-head">New Post</h2>
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
        <button type="submit">Add Post</button>
      </form>
    </>
  );
};
export default NewPost;
