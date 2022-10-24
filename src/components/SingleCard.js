// import './SingleCard.css'


export default function SingleCard({ card, handleChoice, flipped, disabled }) {

const handleClick = () => {
    if (!disabled) {
    handleChoice(card)    
    }
}

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" id={card.id} scr={card.src} alt="card front" />
                <img 
                    className="back" 
                    scr="/img/cover.png" 
                    onClick={handleClick} 
                    alt="card back" />
            </div>
        </div>
    )
}