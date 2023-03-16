import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { postActions } from "../store/Post-slice";
import "./Posts.css";
import NewComment from "./NewComment";
import { commentActions } from "../store/comment-slice";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
const Posts = () => {
  function toPascalCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
      .replace(/^./, function (str) {
        return str.toUpperCase();
      });
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);
  const newComment = useSelector((state) => state.comment.isShowNewComment);
  const isLimitedComments = useSelector(
    (state) => state.setting.isLimitedComments
  );
  const limitedCommentsCount = useSelector(
    (state) => state.setting.limitedCommentsCount
  );
  const isLimitedLikes = useSelector((state) => state.setting.isLimitedLikes);
  const limitedLikesCount = useSelector(
    (state) => state.setting.limitedLikesCount
  );
  const onClickExpandCommentsHandler = (index) => {
    dispatch(postActions.toggleExpandedComments(index));
  };
  const onClickNewCommentHandler = (index) => {
    if (isLimitedComments) {
      if (posts[index].comments.length >= limitedCommentsCount) {
        return;
      } else {
        dispatch(commentActions.openNewComment(index));
      }
    } else {
      dispatch(commentActions.openNewComment(index));
    }
  };
  const onClickEditPostHandler = (index) => {
    dispatch(postActions.beforeEditPost(index));
    navigate(`/admin/editPost/${index}`);
  };
  const onClickLikeHandler = (index) => {
    if (isLimitedLikes) {
      if (posts[index].likesCount >= limitedLikesCount) {
        return;
      } else {
        dispatch(postActions.plusLikesCount(index));
      }
    } else {
      dispatch(postActions.plusLikesCount(index));
    }
  };
  return (
    <>
      {posts.map((post, index) => (
        <div className="post-container" key={index}>
          <div className="post-head">
            <div
              className="star-icon-div"
              style={{ backgroundColor: `${post.color}` }}
            >
              <Icon icon="fluent:star-20-filled" width="1.2rem" color="white" />
            </div>
            <div className="post-title-div">
              <h2 className="post-title">{toPascalCase(post.title)}</h2>
              <h6>Posted at {post.date}</h6>
            </div>
          </div>
          <div className="post-body">
            <p>{toPascalCase(post.description)}</p>
          </div>
          <div className="options-container">
            <div className="options-icon-div-left">
              <Icon
                icon="fluent:comment-multiple-24-filled"
                width="25px"
                className="options-icon left"
                onClick={() => {
                  onClickExpandCommentsHandler(index);
                }}
              />
              <Icon
                icon="fluent:comment-add-48-filled"
                width="25px"
                className="options-icon left"
                onClick={() => {
                  onClickNewCommentHandler(index);
                }}
              />
              <Icon
                icon="fluent:comment-edit-24-filled"
                width="25px"
                className="options-icon left"
                onClick={() => {
                  onClickEditPostHandler(index);
                }}
              />
            </div>
            <div className="options-icon-div-right">
              {post.likesCount}
              <Icon
                icon="bxs:like"
                width="25px"
                className="options-icon right"
                onClick={() => {
                  onClickLikeHandler(index);
                }}
              />
            </div>
          </div>
          {post.isExpandedComments && <Comments index={index} />}
          {newComment && <NewComment />}
        </div>
      ))}
    </>
  );
};
export default Posts;
