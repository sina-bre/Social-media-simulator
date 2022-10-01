import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import DashBoard from "./DashBoard";
import EditPost from "./EditPost";
import Home from "./Home";
import NewPost from "./NewPost";
import Setting from "./Setting";
const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path=":users">
            <Route path="home" element={<Home />} />
            <Route path="newPost" element={<NewPost />} />
            <Route path="editPost/:index" element={<EditPost />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
export default Pages;
