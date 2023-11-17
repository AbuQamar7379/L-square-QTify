import React from "react";
import { useState } from "react";
import Cards from "../Card Section/Cards";

function CardComponent({details}) {
  let [showAll, setShowAll] = useState(false);

  const showCard = ()=>{
    setShowAll(!showAll);
  }

  return(
    <div className="albumContainer">
      <div className="albumHeading">
        <p> {details.category} </p>
        <p className="showAll" onClick={showCard}>
          {showAll ? "Collapse" : "Show All"}
        </p>
      </div>
      <Cards details={details} />
      </div>
  );
}

export default CardComponent;
