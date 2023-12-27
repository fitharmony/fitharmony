import React from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";

const NavBar = ({ navTheme = "dark" }) => {
  return (
    <div className={`${styles.nav} ${styles[navTheme]}`}>
      <div className={styles.titleOptions}>
        <Link href="/">
          <div className={styles.navTitle}>
            <img src="/logo.png" alt="logo" />
            <h2>BodyBits</h2>
          </div>
        </Link>
        <div className={styles.options}>
          <Link href="/blogs">Fitness Blog</Link>
          {/* <a className="disabled">Exercises</a> */}
          <div className={`${styles.featuredCtr} disabled`}>
            <a>Featured Products</a>
            <div className="featured">🔥COMING SOON</div>
          </div>
        </div>
      </div>
      <a
        className={styles.contactBtn}
        href="mailto:your-email@example.com?subject=Subject Line&body=Hello, I would like to ..."
      >
        <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />{" "}
        <span>Contact</span>
      </a>
      {/* Mobile Ctr */}
      <MobileNavBar navTheme={navTheme} />
    </div>
  );
};

export default NavBar;
