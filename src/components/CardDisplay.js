import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CardDisplay() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/cardimages`)
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  // return (
  //   // <div className="CardDisplay">
  //   //   <div className="marquee">
  //   //       <span className="marquee-span">
  //   //         ONLINE FEMINIST CARD DECK&nbsp;&nbsp;&nbsp;
  //   //       </span>
  //   //   </div>

  //   //   <div className="card-grid"></div>
  //   // </div>
  // );
}

export default CardDisplay;
