import axios from "axios";
import { useEffect, useState } from "react";

function Display() {
  const [display, setDisplay] = useState([]);

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
  useEffect(() => {
    axios
      .get(`http://localhost:5001/cardImages/display`)
      .then((res) => {
        const cards = res.data.cards;
        const questions = res.data.questions;
        let principles = [];
        for (let i = 1; i <= 12; i++) {
          const card = {};
          cards.forEach((element) => {
            if (element.principle === i) {
              card[element.type] = element;
            }
          });
          const question = questions.find((element) => {
            return element.principle === i;
          });
          card.question = question;
          principles.push(card);
        }
        setDisplay(principles);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Display">
      {display.map((card) => {
        return (
          <div className="img-display" key={card.principle.principle}>
            <img src={card.principle.image} height={250} width={200} />
            <img src={card.description.image} height={250} />
            <img src={card.question.image} height={250} />
          </div>
        );
      })}
    </div>
  );
}
export default Display;
