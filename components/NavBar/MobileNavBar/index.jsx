import React from "react";
import { useState } from "react";
import styles from "./MobileNavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitterSquare,
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
                  <h2>FitHarmony</h2>
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
                <Link href="/blogs">Fitness Blog</Link>
                <Link href="/calorie-calculator">Calorie Calculator</Link>
                {/* <span className="disabled">Featured Products</span> */}
              </div>
              <div className={styles.contactCtr}>
                <p>Connect With Us</p>
                <div className={styles.socialCtr}>
                  <Link
                    href="https://www.instagram.com/thefitharmony/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fa-icon"
                      icon={faInstagram}
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/TheFitHarmony"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fa-icon"
                      icon={faTwitterSquare}
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <a
                    href="mailto:fitharmony@proton.me?subject=Subject Line&body=Hello, I would like to ..."
                    aria-label="Contact us"
                  >
                    <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />{" "}
                  </a>
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
