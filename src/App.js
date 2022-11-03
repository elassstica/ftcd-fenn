import "./App.css";
import { useEffect, useState } from "react";
import axios from "./axiosClient";
import MemCardGame from "./components/MemCardGame";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Disclaimer from "./pages/Disclaimer";
import Download from "./pages/Original";
import Superrr from "./pages/Superrr";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HowTo from "./pages/HowTo";
import Display from "./components/Display";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [gameLevel, setGameLevel] = useState(12);

  console.log(process.env.REACT_APP_BACKEND_URL);

  useEffect(() => {
    axios
      .get(`/cardimages?level=${gameLevel}`)
      .then((res) => {
        const mappedCards = res.data.map((card) => {
          return {
            ...card,
            matched: false,
          };
        });
        setCards(mappedCards);
      })
      .catch((err) => console.log(err));
  }, [gameLevel, setGameLevel]);



  return (
    <div className="App">
      <Navbar />
      <div className="container-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/download" element={<Download />} />
          <Route path="/superrr" element={<Superrr />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/display" element={<Display />} />

          <Route
            path="/start"
            element={
              <MemCardGame
                cards={cards}
                setCards={setCards}
                gameLevel={gameLevel}
                setGameLevel={setGameLevel}
              />
            }
          />
        </Routes>
        <h1 className="title" id="end">
          -
        </h1>
      </div>
    </div>
  );
}

export default App;
