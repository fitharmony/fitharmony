import React from "react";
import styles from "./Layout.module.scss";
import NavBar from "../NavBar/NavBar";
import FixedGradient from "../FixedGradient";
import Footer from "../Footer";

const Layout = ({ children, showNav = true, style = {} }) => {
  return showNav ? (
    <main className={styles.layout} style={style}>
      <NavBar />
      <div className={styles.children}>{children}</div>
      <FixedGradient />
    </main>
  ) : (
    <div className={`${styles.layout} ${styles.noNav}`} style={style}>
      <div className={styles.children}>{children}</div>
      <FixedGradient />
    </div>
  );
};

export default Layout;
