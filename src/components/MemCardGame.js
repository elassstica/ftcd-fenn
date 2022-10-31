import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import GameMenu from "./GameMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MemCardGame({ cards, setCards, gameLevel, setGameLevel }) {
  const [deck, setDeck] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [match, setMatch] = useState(0);

  const clearMatch = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setMatch(0);
    setDisabled(false);
  };

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
    setMatch(0);
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

  // notification when the game ends
  const gameFinished = () => {
    toast("You've completed the game! Hooray!!");
  };

  // notification when it's a match
  const matchNotify = () => {
    toast("It's a match!");
  };

  // const resetMatch = () => {
  //   setMatch(0)
  // }

  // compare 2 selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.principle === choiceTwo.principle) {
        setMatch((prevMatch) => prevMatch + 1);
        console.log(match, gameLevel);
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
        setTimeout(resetTurn, 60000);
      }
      if (choiceTwo.principle === choiceOne.principle) {
        matchNotify();
      }
      if (match + 1 === +gameLevel) {
        gameFinished();
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="controls">
        <GameMenu setGameLevel={setGameLevel} clearMatch={clearMatch} />
        {
          <button className="button1" onClick={resetTurn}>
            Next Move
          </button>
        }
        <button className="button2" onClick={shuffleCards}>
          new game
        </button>
        <button className="button3">Turns: {turns}</button>
        <button className="button4">Matches: {match}</button>
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
