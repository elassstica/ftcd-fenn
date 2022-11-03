import axios from "../axiosClient";
import { useEffect, useState } from "react";
import carousel from "react-bootstrap/Button";

function Display() {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    axios
      .get(`/cardImages/display`)
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
    <div className="Display-all">
      <div>
        <h1 className="title">FEMINIST TECH PRINCIPLES</h1>
        {display.map((card) => {
          return (
            <div className="img-display" key={card.principle.principle}>
              <img
                className="display-single"
                src={card.principle.image}
                height={550}
              />
              <img
                className="display-single"
                src={card.description.image}
                height={550}
              />
              <img
                className="display-single"
                src={card.question.image}
                height={550}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Display;
