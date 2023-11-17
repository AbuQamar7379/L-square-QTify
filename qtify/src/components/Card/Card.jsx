import React from "react";
import { Tooltip } from "@mui/material";
import "./card.css";
const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album":
        return (
          <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
            <div className="card">
              <div className="cardImg">
                <img src={data.image} alt="album" />
                <p>
                  {(data.follows / 1000).toFixed(1)}
                  {data.follows > 999999 ? "m" : "k"} Follows
                </p>
              </div>
              <div>
                <h3> {data.title} </h3>
              </div>
            </div>
          </Tooltip>
        );
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;
