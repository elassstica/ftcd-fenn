import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MemCardGame from "./components/MemCardGame";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import Download from "./pages/Download";
import Superrr from "./pages/Superrr";
import { Route, Routes } from "react-router-dom";
import GameMenu from "./components/GameMenu";

function App() {
  const [cards, setCards] = useState([]);
  const [gameLevel, setGameLevel] = useState(12);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/cardimages?level=${gameLevel}`)
      .then((res) => {
        const mappedCards = res.data.map((card) => {
          return {
            ...card,
            matched: false,
          };
        });
        setCards(mappedCards);
      })
      .catch((err) => alert(err));
  }, [gameLevel, setGameLevel]);

  let component;
  switch (window.location.pathname) {
    case "/disclaimer":
      component = <Disclaimer />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/download":
      component = <Download />;
      break;
    case "/superrr":
      component = <Superrr />;
      break;
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/download" element={<Download />} />
          <Route path="/superrr" element={<Superrr />} />
          <Route
            path="/menu"
            element={<GameMenu setGameLevel={setGameLevel} />}
          />
        </Routes>
      </div>

      {/* {<div className="marquee">
          <span className="marquee-span">
            ONLINE FEMINIST CARD GAME&nbsp;&nbsp;&nbsp;
          </span>
      </div>} */}

      <MemCardGame cards={cards} setCards={setCards} gameLevel={gameLevel} />
    </div>
  );
}

export default App;
