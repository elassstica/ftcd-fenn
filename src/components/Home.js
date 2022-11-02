import { useNavigate } from "react-router-dom";
import HowTo from "../pages/HowTo";
import About from "./About";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1 className="title 1" id="homepage">Homepage</h1>
      <p className="text">
        Welcome to the Online Feminist Tech Card Game, we are thrilled to have
        you!
      </p>
      <div className="btn-container">
        <button className="button5"
          onClick={() => {
            navigate("/start");
          }}
        >
        Start Playing
      </button>
      </div>
      <About className="title"/>
      <HowTo className="title"/>
      <Footer />
    </div>
  );
}

export default Home;
