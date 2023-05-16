// import "./App.css";
import { useEffect, useState } from "react";
import axios from "./axiosClient";
import MemCardGame from "./components/MemCardGame/MemCardGame";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import Download from "./pages/OriginalDeck/Original";
import Superrr from "./components/Navbar/Superrr";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import HowTo from "./pages/Home/HowTo";
import Display from "./pages/DisplayAllCards/DisplayAllCards";
import Footer from "./components/Footer/Footer";
import "./styles.css";

function App() {
  const [cards, setCards] = useState([]);
  const [gameLevel, setGameLevel] = useState(12);

  // console.log(process.env.REACT_APP_BACKEND_URL);

  const live_url = "https://oftcg.onrender.com";

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
    <>
      <div className="App">
        <Navbar />
        <main>
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
