import './singlecard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div>
      {flipped ? <img height={270}
        id={card._id}
        src={card.image}
        alt="card front"
        className='card'
      /> : <img height={270}
        src="/img/cover.png"
        onClick={handleClick}
        alt="card back"
        className='card'
      /> }
    </div>
  );
}

export default SingleCard;