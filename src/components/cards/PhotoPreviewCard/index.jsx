import React from "react";
import "../cards.scss";
import "./photo-preview-card.scss";

const PhotoPreviewCard = ({ cardData }) => {
  const { userImg, description, name, sport, organization } = cardData;
  return (
    <div className="card">
      <div className="card-screen">
        <img src={userImg} alt="userPhoto" className="card-screen-img" />
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

export default PhotoPreviewCard;
