import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MemCardGame from "./components/MemCardGame";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import Download from "./pages/Download";
import Superrr from "./pages/Superrr";
import { Route, Routes} from "react-router-dom"

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/cardimages`)
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
  }, []);

  let component
  switch (window.location.pathname) {
    case "/disclaimer":
      component = <Disclaimer />
      break
    case "/about":
      component = <About />
      break
    case "/download":
      component = <Download />
      break
    case "/superrr":
      component = <Superrr />
      break
  }


  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/" element={<Disclaimer />} />
          <Route path="/" element={<Download />} />
          <Route path="/" element={<Superrr />} />
        </Routes>
      </div>

      {/* {<div className="marquee">
          <span className="marquee-span">
            ONLINE FEMINIST CARD GAME&nbsp;&nbsp;&nbsp;
          </span>
      </div>} */}

      <MemCardGame cards={cards} setCards={setCards} />

    </div>
  );
}

export default App;
