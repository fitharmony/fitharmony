import React from "react";
import styles from "./BlogPreview.module.scss";

const BlogPost = () => {
  return (
    <div className={styles.blogPreview}>
      <div className={styles.blogImg}>{/* TODO: */}</div>
      <div className={styles.blogPreviewContent}>
        <div className={styles.category}>Engineering</div>
        <h3>GitHub Learning Pathways: Learn from the best</h3>
        <p>
          Gain expertise and insights from top organizations through guided
          tutorials, boosting productivity, enhancing security, and enabling
          seamless collaboration.
        </p>
        <div className={styles.author}>Robb Mapp</div>
        <div className={styles.datePosted}>September 28, 2023</div>
      </div>
    </div>
  );
};

export default BlogPost;
