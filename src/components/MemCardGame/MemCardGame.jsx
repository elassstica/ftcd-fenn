import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import DeckSize from "../DeckSize/DeckSize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './memcardgame.css'

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
    <div className="wrapper_game">
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
        <DeckSize setGameLevel={setGameLevel} clearMatch={clearMatch} />
        <div className="btn_game">
        {
          <button onClick={resetTurn}>
            Next Move
          </button>
        }
        <button onClick={shuffleCards}>
          New Game
        </button>
        <button>Turns: {turns}</button>
        <button>Matches: {match}</button>
      </div>
      </div>
      <div className="game-area">
        {deck.map((card) => (
          <SingleCard
            key={card._id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default MemCardGame;
