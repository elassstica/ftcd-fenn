// import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped cardContainer cardContainer" : "cardContainercardContainer"}>
        <img className="front" id={card._id} src={card.image} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
