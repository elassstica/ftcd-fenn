import "./App.css";
import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import axios from "axios";

// const cardImages = [
//   { id: 1, src: "/img/d1.png", matched: false },
//   { id: 2, src: "/img/d2.png", matched: false },
//   { id: 3, src: "/img/d3.png", matched: false },
//   { id: 4, src: "/img/d4.png", matched: false },
//   { id: 5, src: "/img/d5.png", matched: false },
//   { id: 6, src: "/img/d6.png", matched: false },
//   { id: 7, src: "/img/d7.png", matched: false },
//   { id: 8, src: "/img/d8.png", matched: false },
//   { id: 9, src: "/img/d9.png", matched: false },
//   { id: 10, src: "/img/d10.png", matched: false },
//   { id: 11, src: "/img/d11.png", matched: false },
//   { id: 12, src: "/img/d12.png", matched: false },
//   { id: 13, src: "/img/p1.png", matched: false },
//   { id: 14, src: "/img/p2.png", matched: false },
//   { id: 15, src: "/img/p3.png", matched: false },
//   { id: 16, src: "/img/p4.png", matched: false },
//   { id: 17, src: "/img/p5.png", matched: false },
//   { id: 18, src: "/img/p6.png", matched: false },
//   { id: 19, src: "/img/p7.png", matched: false },
//   { id: 20, src: "/img/p8.png", matched: false },
//   { id: 21, src: "/img/p9.png", matched: false },
//   { id: 22, src: "/img/p10.png", matched: false },
//   { id: 23, src: "/img/p11.png", matched: false },
//   { id: 24, src: "/img/p12.png", matched: false },
// ];

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

  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.principle === choiceTwo.principle) {

        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.principle === choiceOne.principle) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 10000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  // reset choices & increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start game automatically

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <div className="marquee-w">
        <div className="marquee">
          <span className="marquee-span">
            ONLINE FEMINIST CARD DECK&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
      <button onClick={shuffleCards}>new game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
