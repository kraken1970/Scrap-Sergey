import React from "react";
import classNames from "classnames";
import styles from "../cards.module.scss";

const ArticlePreviewCard = ({ cardData }) => {
  const { userImg, description, title } = cardData;
  return (
    <div className={styles.card}>
      <div className={styles.screen}>
        <img src={userImg} alt="userPhoto" className={styles.screenImg} />
      </div>

      <div className={styles.description}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
};

export default ArticlePreviewCard;
