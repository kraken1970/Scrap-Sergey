import React from "react";
import VideoPreviewCard from "../cards/VideoPreviewCard";
import PhotoPreviewCard from "../cards/PhotoPreviewCard";
import ArticlePreviewCard from "../cards/ArticlePreviewCard";
import styles from "./PreviewItemList.module.scss";

const PreviewItemList = ({ cardsItems }) => {
  const { card, cardsArray } = cardsItems;

  let PreviewCard;
  if (card === VideoPreviewCard) {
    PreviewCard = VideoPreviewCard;
  } else if (card === PhotoPreviewCard) {
    PreviewCard = PhotoPreviewCard;
  } else {
    PreviewCard = ArticlePreviewCard;
  }
  console.log("prev", PreviewCard);

  return (
    <div className={styles.previewItemList}>
      {cardsArray.map((item, index) => {
        return <PreviewCard key={index} cardData={item} />;
      })}
    </div>
  );
};

export default PreviewItemList;
