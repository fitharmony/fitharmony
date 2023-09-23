import React from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.titleOptions}>
        <div className={styles.navTitle}>
          <img src="/logo.png" />
          <h2>BodyBits</h2>
        </div>
        <div className={styles.options}>
          <a>Fitness Blog</a>
          <a>Products</a>
          <a>About</a>
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
