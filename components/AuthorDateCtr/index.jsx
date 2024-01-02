import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./AuthorDateCtr.module.scss";

const AuthorDateCtr = ({
  author = "FitHarmony Author Name",
  date = Date.now().toLocaleString,
}) => {
  return (
    <div className={styles.authorDateCtr}>
      <div className={styles.authorCtr}>
        <div className={styles.authorImg}>
          <FontAwesomeIcon icon={faUser} className={styles.svg} />
        </div>
        <div>
          <h4>{author}</h4>
          <span>Author</span>
        </div>
      </div>
      <time className={styles.datePosted}>{date}</time>
    </div>
  );
};

export default AuthorDateCtr;
