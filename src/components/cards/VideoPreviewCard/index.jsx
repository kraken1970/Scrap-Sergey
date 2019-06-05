import React from "react";
import "../cards.scss";
import "./video-preview-card.scss";

const VideoPreviewCard = ({ cardData }) => {
  const { userImg, description, name, sport, organization } = cardData;
  return (
    <div className="card card-video">
      <div className="card-screen card-screen-video">
        <img src={userImg} alt="userVideo" className="card-screen-img" />
      </div>

      <div className="card-description">
        <p className="card-text">{description}</p>
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
