import React from "react";
import styles from "./SectionSeparator.module.scss";

const SectionSeparator = ({ title }) => {
  const repeatedTitle = new Array(25).fill(title).join(" ");

  return (
    <div className={styles.ss}>
      <div className={styles.title}>{repeatedTitle}</div>
    </div>
  );
};

export default SectionSeparator;
