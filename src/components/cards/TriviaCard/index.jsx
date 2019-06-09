import React, { useState } from "react";
import "./trivaRotate.scss";
import styles from "./trivaCard.module.scss";
import classNames from "classnames";
// import "./trivaCard.scss";

const TriviaCard = ({ cardData }) => {
  const { category, question, answer } = cardData;

  const [activeCard, setStatus] = useState(false);

  const setActiveCard = () => {
    setStatus(!activeCard);
  };

  return (
    <div className={styles.card3d}>
      <div
        className={classNames(styles.triviaCard, "trivaFront", {
          active: activeCard
        })}
        onClick={setActiveCard}
      >
        <div className={styles.triviaCardBody}>
          <p className={styles.TriviaCardtriviaText}>{question}</p>
        </div>
        <button
          type="button"
          className={classNames(styles.triviaCardBtn, styles.btnFront)}
        >
          {category}
        </button>
      </div>
      <div
        className={classNames(styles.triviaCard, "triviaBack", {
          active: activeCard
        })}
        onClick={setActiveCard}
      >
        <div className={styles.triviaCardBody}>
          <h5 className={styles.triviaTitle}>Answer</h5>
          <p className={classNames(styles.triviaText, styles.trivaTextBack)}>
            {answer}
          </p>
        </div>
        <button
          type="button"
          className={classNames(styles.triviaCardBtn, styles.btnBack)}
        >
          {category}
        </button>
      </div>
    </div>
  );
};

export default TriviaCard;
