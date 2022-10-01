import "./NewComment.css";
import { Icon } from "@iconify/react";
import { postActions } from "../store/Post-slice";
import { useSelector, useDispatch } from "react-redux";
import { commentActions } from "../store/comment-slice";

const NewComment = () => {
  const postIndex = useSelector((state) => state.comment.postIndex);
  const comment = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();
  const closeClickHandler = () => {
    dispatch(commentActions.closeNewComment());
  };
  const commentTextOnChangeHandler = (e) => {
    dispatch(commentActions.onChangeComment(e.target.value));
  };
  const onClickAddCommnetHandler = () => {
    dispatch(commentActions.setComment());
    dispatch(postActions.addCommentToPost({ postIndex, comment }));
    dispatch(commentActions.closeNewComment());
  };
  return (
    <>
      <div className="comment-overlay" onClick={closeClickHandler}></div>
      <div className="comment-modal">
        <div className="comment-modal-close-div">
          <Icon
            icon="eva:close-outline"
            width="1.5rem"
            className="comment-modal-close-icon"
            onClick={closeClickHandler}
          />
        </div>
        <div className="comment-modal-content">
          <textarea
            rows="5"
            cols="10"
            placeholder="New Comment"
            onChange={(e) => {
              commentTextOnChangeHandler(e);
            }}
          />
          <button onClick={onClickAddCommnetHandler}>Add Commnet</button>
        </div>
      </div>
    </>
  );
};

export default NewComment;
