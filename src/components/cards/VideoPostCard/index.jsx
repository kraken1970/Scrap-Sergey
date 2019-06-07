import React from "react";
import classNames from "classnames";

import styles from "../cards.module.scss";

const VideoPostCard = ({ cardData }) => {
  const { userImg, description, name, sport, organization } = cardData;
  return (
    <div className={classNames(styles.card, styles.post)}>
      <div className={classNames(styles.screen, styles.screenVideo)}>
        <img src={userImg} alt="userVideo" className={styles.screenImg} />
      </div>

      <div className={styles.description}>
        <p className={styles.text}>{description}</p>
        <div className={styles.tags}>
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

export default VideoPostCard;
