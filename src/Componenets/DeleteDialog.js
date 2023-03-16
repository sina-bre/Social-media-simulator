import "./DeleteDialog.css";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { positions } from "@mui/system";
import { postActions } from "../store/Post-slice";
import { useNavigate } from "react-router-dom";

const DeleteDialog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickExitHandler = () => {
    dispatch(postActions.toggleShowDialog());
  };
  const onClickDeleteHandler = () => {
    dispatch(postActions.deletePost());
    dispatch(postActions.clear());
    navigate("/admin/home");
  };
  return (
    <>
      <div className="deleteDialog-overlay" onClick={onClickExitHandler}></div>
      <div className="deleteDialog-modal">
        <div className="deleteDialog-modal-close-div">
          <Icon
            icon="eva:close-outline"
            width="1.5rem"
            className="deleteDialog-modal-close-icon"
            onClick={onClickExitHandler}
          />
        </div>
        <div className="deleteDialog-modal-content">
          <h4>Do you want to delete this post?</h4>
          <div className="deleteDialog-modal-buttons">
            <button
              className="deleteDialog-cancel-btn"
              onClick={onClickExitHandler}
            >
              Cancel
            </button>
            <button
              className="deleteDialog-delete-btn"
              onClick={onClickDeleteHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteDialog;
