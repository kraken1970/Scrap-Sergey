import React from "react";
import styles from "../cards.module.scss";
import classNames from "classnames";

const PhotoPreviewCard = ({ cardData }) => {
  const { userImg, description, name, sport, organization } = cardData;
  return (
    <div className={styles.card}>
      <div className={styles.cardScreen}>
        <img src={userImg} alt="userPhoto" className={styles.cardScreenImg} />
      </div>

      <div className={styles.cardDescription}>
        <p className={styles.cardText}>{description}</p>
        <div className="cardTags">
          <button className={classNames("btnUserTag", styles.btnCard)}>
            #{sport}
          </button>

          <button className={classNames("btnUserTag", styles.btnCard)}>
            #{name}
          </button>

          <button className={classNames("btnUserTag", styles.btnCard)}>
            #{organization}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoPreviewCard;
