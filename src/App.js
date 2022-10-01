import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Auth from "./Componenets/Auth";
import Pages from "./Componenets/Pages";
import Card from "./UI/Card";

function App() {
  const isDarkMode = useSelector((state) => state.setting.isDarkMode);
  return (
    <div className={`body ${isDarkMode && ["dark"]}`}>
      <Card>
        <Pages />
      </Card>
    </div>
  );
}

export default App;
