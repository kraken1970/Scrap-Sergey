import React from "react";
// import "../cards.scss";

import styles from "../cards.module.scss";

import classNames from "classnames";

const VideoPreviewCard = ({ cardData }) => {
  const { userImg, description, name, sport, organization } = cardData;
  return (
    <div className="card">
      <div className={classNames(styles.cardScreen, "cardScreenVideo")}>
        <img src={userImg} alt="userVideo" className="card-screen-img" />
      </div>

      <div className="cardDescription">
        <p className="cardText">{description}</p>
        <div className="card-tags">
          <button className="btn-user-tag btn-card">#{sport}</button>

          <button className="btn-user-tag btn-card">#{name}</button>

          <button className="btn-user-tag btn-card">#{organization}</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewCard;
