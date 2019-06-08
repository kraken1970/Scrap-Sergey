import React from "react";
// import classNames from "classnames";
import styles from "../cards.module.scss";

const PollCard = ({ cardData }) => {
  const { userImg } = cardData;
  return (
    <div className={styles.card}>
      <div className={styles.screen}>
        <img src={userImg} alt="userPoll" className={styles.screenImg} />
      </div>
    </div>
  );
};

export default PollCard;
