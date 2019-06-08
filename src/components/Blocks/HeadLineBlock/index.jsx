import React from "react";

import styles from "./headLineBlock.module.scss";

const HeadLineBlock = ({ name, link }) => {
  return (
    <div className={styles.headLineBlock}>
      <h4 className={styles.name}>{name}</h4>
      <a href="#" className={styles.link}>
        {link}
      </a>
    </div>
  );
};

export default HeadLineBlock;
