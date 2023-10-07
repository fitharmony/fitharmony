import React from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.titleOptions}>
        <Link href="/">
          <div className={styles.navTitle}>
            <img src="/logo.png" />
            <h2>BodyBits</h2>
          </div>
        </Link>
        <div className={styles.options}>
          <a>Fitness Blog</a>
          <a>Exercises</a>
          <div className={styles.featuredCtr}>
            <a>Featured Products</a>
            <div className={styles.featured}>🔥HOT</div>
          </div>
        </div>
      </div>
      <a>
        <button>
          <FontAwesomeIcon className="fa-icon" icon={faEnvelope} /> Contact
        </button>
      </a>
    </div>
  );
};

export default NavBar;
