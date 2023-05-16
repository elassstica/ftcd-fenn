import './displayallcards.css';
import axios from "../../axiosClient";
import { useEffect, useState } from "react";

const Display = () => {
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
    <div>
      <div className='wrapper_display-all'>
        <h1 className="title">FEMINIST TECH PRINCIPLES</h1>
        {display.map((card) => {
          return (
            <div className="collection" key={card.principle.principle}>
              <img
                className="display-all"
                src={card.principle.image}
                alt=""
              />
              <img
                className="display-all"
                src={card.description.image}
                alt=""
              />
              <img
                className="display-all"
                src={card.question.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Display;
