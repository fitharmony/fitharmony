import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.bbFooter}>
      <div className={styles.bbFooter__container}>
        <div className={styles.bbFooter__container__left}>
          <div className={styles.bbFooter__container__left__logo}>
            <img src="/logo.png" alt="logo" />
            <h2>FitHarmony.com</h2>
          </div>
          <div className={styles.bbFooter__container__left__text}>
            <p>© 2023 FitHarmony. All rights reserved</p>
            <a
              href="mailto:your-email@example.com?subject=Subject Line&body=Hello, I would like to ..."
              aria-label="Contact us"
            >
              hello@example.com
            </a>
          </div>
        </div>
        <div className={styles.bbFooter__container__right}>
          <div className={styles.bbFooter__container__right__text}>
            {/* <p>Privacy Policy</p>
            <p>Terms & Conditions</p> */}
          </div>
          <div className={styles.bbFooter__container__right__social}>
            <FontAwesomeIcon className={styles.svg} icon={faFacebookSquare} />
            <FontAwesomeIcon className={styles.svg} icon={faInstagram} />
          </div>
        </div>
      </div>
      <div className={styles.bbFooterGradient} />
    </footer>
  );
};

export default Footer;
