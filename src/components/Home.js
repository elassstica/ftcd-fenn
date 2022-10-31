import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
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
    </div>
  );
}

export default Home;
