import { useNavigate } from "react-router-dom";
import About from "./About";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>Homepage</h1>
      <p>
        Welcome to the Online Feminist Tech Card Game, we are thrilled to have
        you!
      </p>
      <button
        onClick={() => {
          navigate("/start");
        }}
      >
        Start Playing
      </button>
      <About />
    </div>
  );
}

export default Home;
