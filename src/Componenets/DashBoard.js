import "./DashBoard.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <Outlet />
      <Navbar />
    </div>
  );
};
export default DashBoard;
