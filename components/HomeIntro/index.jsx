import React from "react";
import styles from "./HomeIntro.module.scss";
import Link from "next/link";

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
      <Link href="/blogs">
        <button>Explore the Fitness Blog</button>
      </Link>
    </div>
  );
};

export default HomeIntro;
