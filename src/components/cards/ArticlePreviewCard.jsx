import React from "react";
import classNames from "classnames";
import styles from "./cards.module.scss";

const ArticlePreviewCard = ({ cardData }) => {
  const { userImg, description, title } = cardData;
  return (
    <div className={classNames(styles.card, styles.cardArticle)}>
      <div className={styles.cardScreen}>
        <img src={userImg} alt="userPhoto" className={styles.cardScreenImg} />
      </div>

      <div className={styles.cardDescription}>
        <h4 className={styles.card - title}>{title}</h4>
        <p className={styles.cardText}>{description}</p>
      </div>
    </div>
  );
};

export default ArticlePreviewCard;
