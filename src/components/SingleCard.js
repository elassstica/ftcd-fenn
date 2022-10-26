// import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div>
      <div className={flipped ? "flipped cardContainer" : "cardContainer"}>
        {flipped ? <img height={300}
          className="front"
          id={card._id}
          src={card.image}
          alt="card front"
        /> : <img height={300}
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
        /> }  
      </div>
    </div>
  );
}
