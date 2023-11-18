import React from "react";
import { Tooltip } from "@mui/material";
import "./card.css";

const Card = ({ data, type }) => {
  const getCard = () => {
    const commonContent = (
      <div className="cardImg">
        <img src={data.image} alt={type === "album" ? "album" : data.title} />
        <p>
          {((type === "album" ? data.follows : data.likes) / 1000).toFixed(1)}
          {data.follows > 999999 || data.likes > 999999 ? "m" : "k"}{" "}
          {type === "album" ? "Follows" : "Likes"}
        </p>
      </div>
    );

    return (
      <Tooltip
        title={
          type === "album"
            ? `${data.songs.length} songs`
            : `Label : ${data.genre.label}`
        }
        placement="top"
        arrow
      >
        <div className="card">
          {commonContent}
          <div>
            <h3>{data.title}</h3>
          </div>
        </div>
      </Tooltip>
    );
  };

  return type === "album" || type === "songs" ? getCard() : null;
};

export default Card;
