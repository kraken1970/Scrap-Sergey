import React from "react";
import "../cards.scss";
import "./ArticlePriviewCard.scss";

const ArticlePreviewCard = ({ cardData }) => {
  const { userImg, description, title } = cardData;
  return (
    <div className="card card-article">
      <div className="card-screen">
        <img src={userImg} alt="userPhoto" className="card-screen-img" />
      </div>

      <div className="card-description">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ArticlePreviewCard;
