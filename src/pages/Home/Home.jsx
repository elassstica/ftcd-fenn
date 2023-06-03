import { useNavigate } from "react-router-dom";
import HowTo from "./HowTo";
import './home.css';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper home">
      <h1 id="homepage" className="title">Welcome</h1>
      <p className="text">
        to the Online Feminist Tech Card Game, we are thrilled to have
        you!
      </p>
      <button
        onClick={() => {
          navigate("/start");
        }}
      className="btn-start">
        Start Playing
      </button>
      <HowTo />
    </div>
  );
}

export default Home;
