import React from "react";
import styles from "./BlogIntro.module.scss";

const BlogIntro = ({ blogData }) => {
  return (
    <div className={styles.blogIntroCtr}>
      <div className={styles.blogIntroBg} />
      BlogIntro
    </div>
  );
};

export default BlogIntro;
