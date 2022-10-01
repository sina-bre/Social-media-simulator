import "../UI/Card.css";
import { useSelector } from "react-redux";

const Card = (props) => {
  const isDarkMode = useSelector((state) => state.setting.isDarkMode);
  return (
    <>
      <div className={`container ${isDarkMode && ["dark"]}`}>
        {props.children}
      </div>
    </>
  );
};

export default Card;
