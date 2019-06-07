import React from "react";

import styles from "./PreviewItemList.module.scss";

const PreviewItemList = ({ cardsItems, Card }) => {
  return (
    <div className={styles.previewItemList}>
      {cardsItems.map((item, index) => {
        return <Card key={index} cardData={item} />;
      })}
    </div>
  );
};

export default PreviewItemList;
