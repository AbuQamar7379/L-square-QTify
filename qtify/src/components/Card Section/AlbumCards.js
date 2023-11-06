import "./albumCards.css";
import sampleCard from "../../assets/sampleCard.png";

const AlbumCards = () => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={sampleCard} alt="Sample Card" />
        <p> 100M Follows </p>
      </div>
      <div>
        <h3>New Bollywood</h3>
      </div>
    </div>
  );
};

export default AlbumCards;
