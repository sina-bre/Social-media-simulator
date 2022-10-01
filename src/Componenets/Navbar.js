import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useEffect } from "react";

const Navbar = () => {
  const { users } = useParams();
  const dispatch = useDispatch();
  if (users == "admin") {
    dispatch(authActions.setIsAdmin(true));
  } else {
    dispatch(authActions.setIsAdmin(false));
  }
  useEffect(() => {
    console.log(users);
  }, []);
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <li>
          <Link to={`/dashboard/${users}/home`}>
            <Icon
              icon="fluent:home-32-filled"
              width="25px"
              className="list-icons"
            />
          </Link>
        </li>
        <li>
          <Link to={`/dashboard/${users}/newPost`}>
            <Icon
              icon="heroicons-solid:view-grid-add"
              width="40px"
              className="list-icons"
            />
          </Link>
        </li>
        <li>
          <Link to={`/dashboard/${users}/setting`}>
            <Icon
              icon="eva:settings-fill"
              width="25px"
              className="list-icons"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
