import "./topAlbum.css";
import React from "react";
import AlbumCards from "./AlbumCards";
import { useState } from "react";

const TopAlbum = () => {
  let [showAll, setShowAll] = useState(false);

  const showCard = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="topAlbumContainer">
      <div className="topAlbumHeading">
        <p>Top Albums</p>
        <p className="showAll" onClick={showCard}>
          {showAll ? "Collapse" : "Show All"}
        </p>
      </div>
      <AlbumCards showCard={{ showAll, setShowAll }} />
    </div>
  );
};

export default TopAlbum;
