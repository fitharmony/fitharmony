import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import styles from "./TextChip.module.scss";

const TextChip = ({ title = "text", color = "#A9A5A8" }) => {
  return (
    <div className={styles.textChip}>
      {" "}
      <FontAwesomeIcon icon={faBullseye} className={styles.svg} />
      {title}
    </div>
  );
};

export default TextChip;
