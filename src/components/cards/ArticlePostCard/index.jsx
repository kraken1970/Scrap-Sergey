import React from "react";
import classNames from "classnames";
import styles from "../cards.module.scss";

const ArticlePostCard = ({ cardData }) => {
  const { userImg, description, title } = cardData;
  return (
    <div className={classNames(styles.card, styles.post)}>
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

export default ArticlePostCard;
