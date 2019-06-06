import React from "react";
import styles from "../cards.module.scss";

const ArticlePreviewCard = ({ cardData }) => {
  const { userImg, description, title } = cardData;
  return (
    <div className="card card-article">
      <div className="cardScreen">
        <img src={userImg} alt="userPhoto" className="card-screen-img" />
      </div>

      <div className="cardDescription">
        <h4 className="card-title">{title}</h4>
        <p className="cardText">{description}</p>
      </div>
    </div>
  );
};

export default ArticlePreviewCard;
