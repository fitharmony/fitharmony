import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.bbFooter}>
      <div className={styles.bbFooter__container}>
        <div className={styles.bbFooter__container__left}>
          <div className={styles.bbFooter__container__left__logo}>
            <img src="/logo.png" alt="logo" />
            <h2>bodybits.com</h2>
          </div>
          <div className={styles.bbFooter__container__left__text}>
            <p>© 2023 BodyBits. All rights reserved</p>
          </div>
        </div>
        <div className={styles.bbFooter__container__right}>
          <div className={styles.bbFooter__container__right__text}>
            {/* <p>Privacy Policy</p>
            <p>Terms & Conditions</p> */}
          </div>
          <div className={styles.bbFooter__container__right__social}>
            {/* <img src="/images/facebook.png" alt="facebook" />
            <img src="/images/instagram.png" alt="instagram" />
            <img src="/images/twitter.png" alt="twitter" /> */}
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
