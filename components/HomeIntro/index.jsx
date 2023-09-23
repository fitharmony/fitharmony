import React from "react";
import styles from "./HomeIntro.module.scss";

const HomeIntro = () => {
  return (
    <div className={styles.homeIntro}>
      {" "}
      <h1>Exercises Uncovered. Fitness Mastered.</h1>
      <p>
        Discover a curated library of exercises for every body part. Find
        detailed descriptions, master your technique, and embark on your fitness
        journey with BodyBits.
      </p>
      <button>Explore the Fitness Blog</button>
    </div>
  );
};

export default HomeIntro;
