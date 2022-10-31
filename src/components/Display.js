import axios from "axios";
import { useState } from "react";

function Display() {
  const { display, setDisplay } = useState([]);

  // axios
  // .get(`http://localhost:5001/display`)
  // .then((res) => {
  //     setCards(response.cards.principles.map((card) => {
  //         return {
  //             card
  //         }
  //     }))
  // })
  // .catch((err) => console.log(err))

  axios
    .get(`http://localhost:5001/cardImages/display`)
    .then((res) => {
      const cards = res.data.cards;
      const questions = res.data.questions;
      console.log(cards);
      console.log(questions);
    })
    .catch((err) => console.log(err));

  return <div className="Display"></div>;
}
export default Display;
