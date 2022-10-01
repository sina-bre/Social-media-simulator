import "./Comments.css";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";

const Comments = (props) => {
  const comments = useSelector(
    (state) => state.post.posts[props.index].comments
  );
  const mapComments = useSelector((state) => state.post.showPost);
  return (
    <div className="comments-container">
      {mapComments &&
        comments.map((comment, index) => (
          <div className="comment-container" key={index}>
            <div className="comment-container-head">
              <div
                className="comment-container-icon-div"
                style={{ backgroundColor: `${comment.color}` }}
              >
                <Icon
                  icon="mingcute:user-5-fill"
                  color="#f3f3f8"
                  className="comment-container-icon"
                />
              </div>
              <div className="comment-head-left">
                <div className="comment-user-div">
                  <h4>User</h4>
                </div>
                <div className="comment-date-div">
                  <h6>{comment.date}</h6>
                </div>
              </div>
            </div>
            <div className="comment-container-body">
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Comments;
