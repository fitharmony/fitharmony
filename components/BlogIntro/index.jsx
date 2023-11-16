import React from "react";
import styles from "./BlogIntro.module.scss";

const PageIntro = ({ title, category, description, imageUrl }) => {
  return (
    <div className={styles.blogIntroCtr}>
      <div className={styles.blogIntroBg} />
      <div className={styles.category}>{category}</div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt="bodybits-blog-image" />
    </div>
  );
};

export default PageIntro;
