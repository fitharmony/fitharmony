import React from "react";
import styles from "./HomeIntro.module.scss";
import Link from "next/link";

const HomeIntro = () => {
  return (
    <header className={styles.homeIntro}>
      <h1>Fitness Insights & Your Wellness Journey</h1>
      <p>
        Discover the latest in fitness and wellness. Join us on a journey
        towards a healthier, more balanced lifestyle with expert insights, tips,
        and inspiring stories.
      </p>
      <Link href="/blogs" aria-label="Explore the Fitness Blog">
        <button>Explore the Fitness Blog</button>
      </Link>
    </header>
  );
};

export default HomeIntro;
