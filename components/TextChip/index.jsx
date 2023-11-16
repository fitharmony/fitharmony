import React from "react";
import styles from "./TextChip.module.scss";
import { hexToRGBA } from "../../helpers";

const TextChip = ({ title = "text", color = "#A9A5A8" }) => {
  const backgroundColor = hexToRGBA(color, 0.15); // Convert hex color to RGBA with 25% opacity

  return (
    <div
      style={{
        color: color,
        border: `1px solid ${color}`,
        backgroundColor: backgroundColor,
      }}
      className={styles.textChip}
    >
      {title}
    </div>
  );
};

export default TextChip;
