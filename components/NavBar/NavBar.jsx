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
      <a className={styles.contactBtn}>
        <button>
          <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />{" "}
          <span>Contact</span>
        </button>
      </a>
      {/* Mobile Ctr */}
      <MobileNavBar navTheme={navTheme} />
    </div>
  );
};

export default NavBar;
