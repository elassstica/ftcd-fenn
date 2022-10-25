import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CardDisplay() {
  return (
    <div className="CardDisplay">
      <div className="marquee-w">
        <div className="marquee">
          <span className="marquee-span">
            ONLINE FEMINIST CARD DECK&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      <div className="card-grid"></div>
    </div>
  );
}

export default CardDisplay;
