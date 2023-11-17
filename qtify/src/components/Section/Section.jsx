import { useState } from "react";
import Card from "../Card/Card";
import "./section.css";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  let [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="header">
        <p>{title}</p>
        <p className="showAll" onClick={handleToggle}>
          {toggle ? "Collapse" : "Show All"}
        </p>
      </div>
      {!data.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <CircularProgress color="success" />{" "}
          <p style={{ marginLeft: "10px" }}>Loading...</p>
        </Box>
      ) : (
        <div className="cardsWrapper">
          {toggle ? (
            <div className="wrapper">
              {data.map((card) => {
                return <Card data={card} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              component={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Section;
