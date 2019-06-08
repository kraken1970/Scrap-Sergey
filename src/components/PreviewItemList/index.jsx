import React from "react";

import styles from "./PreviewItemList.module.scss";

const PreviewItemList = ({ cardsItems, Card }) => {
  return (
    <div className={styles.previewItemList}>
      {cardsItems.map(item => {
        return <Card key={item.id} cardData={item} />;
      })}
    </div>
  );
};

export default PreviewItemList;
