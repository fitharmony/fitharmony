import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
              href="mailto:fitharmony@proton.me?subject=Subject Line&body=Hello, I would like to ..."
              aria-label="Contact us"
            >
              fitharmony@proton.me
            </a>
          </div>
        </div>
        <div className={styles.bbFooter__container__right}>
          <div className={styles.bbFooter__container__right__social}>
            <Link
              href="https://www.instagram.com/thefitharmony/"
              target="_blank"
            >
              <FontAwesomeIcon className={styles.svg} icon={faInstagram} />
            </Link>
            <Link href="https://twitter.com/TheFitHarmony" target="_blank">
              <FontAwesomeIcon className={styles.svg} icon={faTwitter} />
            </Link>
          </div>
          <div className={styles.bbFooter__container__right__text}>
            <Link
              href="https://app.termly.io/document/privacy-policy/376338b7-9179-4f35-ac65-39312669e0d0"
              target="_blank"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://app.termly.io/document/terms-of-service/ec22d35a-c7b5-4a6f-9bfb-8aa4a5f13463"
              target="_blank"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bbFooterGradient} />
    </footer>
  );
};

export default Footer;
