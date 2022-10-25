import "./App.css";
import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import axios from "axios";

function MemCardGame() {
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
    <div className="MemCardGame">
      <div className="marquee-w">
        <div className="marquee">
          <span className="marquee-span">
            ONLINE FEMINIST CARD DECK GAME&nbsp;&nbsp;&nbsp;
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

export default MemCardGame;
