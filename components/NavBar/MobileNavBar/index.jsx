import React from "react";
import { useState } from "react";
import styles from "./MobileNavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

// Mobile Navbar Container (icon and options)
const MobileNavBar = ({ navTheme }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className={styles.mobileNavCtr}>
      <div className="mobileNavIcon">
        <FontAwesomeIcon
          className="fa-icon"
          icon={faBars}
          onClick={() => setShowMobileNav(true)}
          style={{ color: navTheme === "dark" ? "black" : "white" }}
        />
      </div>
      {showMobileNav && (
        <div className={styles.mobileNavOptionsCtr}>
          <div className={styles.mobileNavOptions}>
            <div className={styles.mobileNavTitle}>
              <Link href="/">
                <div className={styles.navTitle}>
                  <img src="/logo.png" alt="logo" />
                  <h2>BodyBits</h2>
                </div>
              </Link>
              <FontAwesomeIcon
                className="fa-icon"
                icon={faClose}
                onClick={() => setShowMobileNav(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className={styles.mobileNavContent}>
              <div className={styles.mobileNavLinks}>
                <a>Fitness Blog</a>
                <a>Exercises</a>
                <a className="disabled">Featured Products</a>
              </div>
              <div className={styles.contactCtr}>
                <p>Connect With Us</p>
                <div className={styles.socialCtr}>
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faInstagram}
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faFacebookSquare}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
