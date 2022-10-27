import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import GameMenu from "./GameMenu";

function MemCardGame({ cards, setCards, gameLevel, setGameLevel }) {
  const [deck, setDeck] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // select class for game level
  const selectClass = () => {
    if (+gameLevel === 3) {
      return "grid-card-small";
    } else if (+gameLevel === 6) {
      return "grid-card-med";
    } else {
      return "grid-card-full";
    }
  };

  // shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => {
      return Math.random() - 0.5;
    });
    setChoiceOne(null);
    setChoiceTwo(null);
    setDeck(shuffledCards);
    setTurns(0);
  };

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
    // eslint-disable-next-line
  }, [cards]);

  // compare 2 selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.principle === choiceTwo.principle) {
        setDeck((prevCards) => {
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
        setTimeout(resetTurn, 6000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div>
      <div className="controls">
        <GameMenu setGameLevel={setGameLevel} />
        {
          <button className="button1" onClick={resetTurn}>
            Next Move
          </button>
        }
        <button className="button2" onClick={shuffleCards}>
          new game
        </button>
        <button className="button3">Turns: {turns}</button>
      </div>
      <div className={selectClass()}>
        {deck.map((card) => (
          <div className="card-card">
            <SingleCard
              key={card._id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemCardGame;
