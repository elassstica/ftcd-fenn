import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MemCardGame from "./components/MemCardGame";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  console.log(cards);

  return (
    <div className="App">

      {<div className="marquee">
          <span className="marquee-span">
            ONLINE FEMINIST CARD GAME&nbsp;&nbsp;&nbsp;
          </span>
      </div>}

      <MemCardGame cards={cards} setCards={setCards} />

    </div>
  );
}

export default App;
