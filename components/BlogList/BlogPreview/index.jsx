import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./BlogPreview.module.scss";
import Link from "next/link";

const BlogPost = ({ blogData }) => {
  return (
    <Link href={`/blogs/${blogData.title}/`} className={styles.blogPreview}>
      <img className={styles.blogImg} src={blogData.imageUrl} />
      <div className={styles.blogPreviewContent}>
        <div className={styles.category}>{blogData.category}</div>
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
