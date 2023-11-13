import React from "react";
import styles from "./BlogIntro.module.scss";

const BlogIntro = ({ blogData }) => {
  return (
    <div className={styles.blogIntroCtr}>
      <div className={styles.blogIntroBg} />
      <div className={styles.category}>{blogData.category}</div>
      <h1>{blogData.title}</h1>
      <p>{blogData.description}</p>
      <img src={blogData.imageUrl} alt="bodybits-blog-image" />
    </div>
  );
};

export default BlogIntro;
