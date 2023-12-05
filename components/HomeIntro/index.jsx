import React from "react";
import styles from "./HomeIntro.module.scss";
import Link from "next/link";

const HomeIntro = () => {
  return (
    <div className={styles.homeIntro}>
      {" "}
      <h1>Fitness Insights & Your Wellness Journey</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor
        fermentum nisl eget semper. Sed leo sem, tincidunt eu dolor vitae, porta
        eleifend diam. Fusce scelerisque scelerisque ligula, non placerat nulla
        tincidunt nec.
      </p>
      <Link href="/blogs">
        <button>Explore the Fitness Blog</button>
      </Link>
    </div>
  );
};

export default HomeIntro;
