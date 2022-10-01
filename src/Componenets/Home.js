import Posts from "./Posts";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const showPost = useSelector((state) => state.post.showPost);
  return (
    <>
      <div className="home-container">
        <div className="posts-container">
          {!showPost ? <h1>There are no posts yet</h1> : <Posts />}
        </div>
      </div>
    </>
  );
};
export default Home;
