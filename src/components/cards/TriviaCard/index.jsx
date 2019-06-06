import React, { useState } from "react";
// import styles from "./trivaCard.module.scss";
import classNames from "classnames";
import "./trivaCard.scss";

const TriviaCard = ({ cardData }) => {
  const { category, question, answer } = cardData;

  const [activeCard, setStatus] = useState(false);

  const setActiveCard = () => {
    setStatus(!activeCard);
  };

  return (
    <div className="card3d">
      <div
        className={classNames("triviaCard", "front", { active: activeCard })}
        onClick={setActiveCard}
      >
        <div className="triviaCardBody">
          <p className="triviaText">{question}</p>
        </div>
        <button
          type="button"
          className={classNames("triviaCardBtn", "btnFront")}
        >
          {category}
        </button>
      </div>
      <div
        className={classNames("triviaCard", "back", {
          active: activeCard
        })}
        onClick={setActiveCard}
      >
        <div className="triviaCardBody">
          <h5 className="triviaTitle">Answer</h5>
          <p className={classNames("triviaText", "trivaTextBack")}>{answer}</p>
        </div>
        <button
          type="button"
          className={classNames("triviaCardBtn", "btnBack")}
        >
          {category}
        </button>
      </div>
    </div>
  );
};

export default TriviaCard;
