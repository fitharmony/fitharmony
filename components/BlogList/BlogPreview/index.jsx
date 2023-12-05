import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./BlogPreview.module.scss";
import Link from "next/link";

const BlogPost = ({ blogData, variant, isTrending }) => {
  return (
    <Link
      href={`/blog/${blogData.title}/`}
      className={`${styles.blogPreview} ${styles[variant]}`}
    >
      <img
        className={styles.blogImg}
        src={blogData.imageUrl}
        alt="bodybits-blog-preview-image"
      />
      <div className={styles.blogPreviewContent}>
        <div className={styles.category}>
          {blogData.category}
          {isTrending && (
            <div
              className="featured"
              style={{
                marginLeft: ".75em",
                maxHeight: "20px",
                lineHeight: "18.5px",
              }}
            >
              🔥TRENDING
            </div>
          )}
        </div>
        <h3>{blogData.title}</h3>
        <p>{blogData.description}</p>
        <div className={styles.authDpCtr}>
          <div className={styles.author}>
            <div className={styles.authorImg}>
              <FontAwesomeIcon icon={faUser} className={styles.svg} />
            </div>
            {blogData.author}
          </div>
          <div className={styles.datePosted}>{blogData["date-posted"]}</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
