import "./Auth.css";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const username = useSelector((state) => state.auth.user.username);
  const password = useSelector((state) => state.auth.user.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    dispatch(
      authActions.onChange({ key: e.target.name, value: e.target.value })
    );
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username == "admin" && password == "admin") {
      navigate("/dashBoard/admin");
    }
    if (username == "user" && password == "user") {
      navigate("/dashBoard/user");
    }
  };
  return (
    <>
      <form className="auth-form" onSubmit={onSubmitHandler}>
        <div className="form-head-icon-div">
          <Icon icon="mingcute:user-5-fill" color="white" width="4rem" />
        </div>
        <div className="form-head-text-div">
          <h2>Authentication</h2>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChangeHandler}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Auth;
