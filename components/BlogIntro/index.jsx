import React from "react";
import styles from "./BlogIntro.module.scss";

const PageIntro = ({
  title,
  category,
  description,
  imageUrl,
  variant = "",
}) => {
  return (
    <header>
      <div className={`${styles.blogIntroCtr} ${styles[variant]}`}>
        <div className={styles.blogIntroBg} />
        <div className={styles.category}>{category}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        {imageUrl && <img src={imageUrl} alt="fitharmony-blog-image" />}
      </div>
    </header>
  );
};

export default PageIntro;
