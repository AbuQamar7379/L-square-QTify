import "./faqs.css";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
  return (
    <div className="FaqsWrapper">
      <div className="Faqs">
        <h1>FAQs</h1>
        <Accordion style={{ borderRadius: "10px", marginBottom: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  fontSize: "40px",
                  fontWeight: "900",
                  color: "#34C94B",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
              borderRadius: "10px",
              height: "78px",
            }}
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
            }}
          >
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ borderRadius: "10px", marginBottom: "20px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  fontSize: "40px",
                  fontWeight: "900",
                  color: "#34C94B",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
              borderRadius: "10px",
              height: "78px",
            }}
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
            }}
          >
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export { FAQs };
