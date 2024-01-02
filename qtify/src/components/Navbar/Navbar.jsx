import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";

const Navbar = ({ data }) => {
  const [isFeedbackClicked, setIsFeedbackClicked] = useState(false);

  const handleClick = () => {
    setIsFeedbackClicked(!isFeedbackClicked);
  };

  useEffect(() => {
    let feedback = document.getElementById("feedback");
    let body = document.body;
    if (isFeedbackClicked) {
      body.style.overflowY = "hidden";
      feedback?.classList.add("feedbackClicked");
    } else {
      body.style.overflowY = "auto";
      feedback?.classList.remove("feedbackClicked");
    }
  }, [isFeedbackClicked]);

  return (
    <>
      {isFeedbackClicked && (
        <Feedback onClose={() => setIsFeedbackClicked(false)} />
      )}
      <nav>
        <Logo />
        <Search data={data} />
        <Button
          text="GIVE FEEDBACK"
          eventHandler={{ event: "onClick", handler: handleClick }}
        />
      </nav>
    </>
  );
};

export default Navbar;
