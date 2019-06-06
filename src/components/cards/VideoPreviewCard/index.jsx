import React from "react";
import classNames from "classnames";

import styles from "../cards.module.scss";

const VideoPreviewCard = ({ cardData }) => {
  const { userImg, description, name, sport, organization } = cardData;
  return (
    <div className={classNames(styles.card)}>
      <div className={classNames(styles.cardScreen, styles.cardScreenVideo)}>
        <img src={userImg} alt="userVideo" className={styles.cardScreenImg} />
      </div>

      <div className={styles.cardDescription}>
        <p className={styles.cardText}>{description}</p>
        <div className={styles.cardTags}>
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

export default VideoPreviewCard;
