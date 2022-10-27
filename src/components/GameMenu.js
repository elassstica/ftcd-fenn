import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GameMenu({ setGameLevel }) {
  return (
    <div>
      <div className="marquee">
        <span className="marquee-span">
          ONLINE FEMINIST CARD DECK&nbsp;&nbsp;&nbsp;
        </span>
        <div className="GameMenu">
          <h1>GAME MENU</h1>
          <select
            class="select-level"
            aria-label=".form-selec-lg example"
            onChange={setGameLevel}
          >
            <option selected>Select Deck Size</option>
            <option value="3">Small Deck (easy level)</option>
            <option value="6">Medium Deck (medium level)</option>
            <option value="12">Full Deck (difficult level)</option>
          </select>
          <Link to="">Start Game</Link>
        </div>
      </div>
    </div>
  );
}

export default GameMenu;
