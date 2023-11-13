import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./AuthorDateCtr.module.scss";

const AuthorDateCtr = ({
  author = "BodyBits Author Name",
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
          <span>BodyBits Author</span>
        </div>
      </div>
      <span className={styles.datePosted}>November 13, 2023</span>
    </div>
  );
};

export default AuthorDateCtr;
