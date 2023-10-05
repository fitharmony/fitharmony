import React from "react";
import styles from "./BlogPreview.module.scss";

const BlogPost = () => {
  return (
    <a className={styles.blogPreview}>
      <img
        className={styles.blogImg}
        src="https://images.pexels.com/photos/1865131/pexels-photo-1865131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className={styles.blogPreviewContent}>
        <div className={styles.category}>Engineering</div>
        <h3>GitHub Learning Pathways: Learn from the best</h3>
        <p>
          Gain expertise and insights from top organizations through guided
          tutorials, boosting productivity, enhancing security, and enabling
          seamless collaboration.
        </p>
        <div className={styles.authDpCtr}>
          <div className={styles.author}>Robb Mapp</div>
          <div className={styles.datePosted}>September 28, 2023</div>
        </div>
      </div>
    </a>
  );
};

export default BlogPost;
