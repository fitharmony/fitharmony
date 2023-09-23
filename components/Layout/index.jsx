import React from "react";
import styles from "./Layout.module.scss";
import NavBar from "../NavBar/NavBar";
import FixedGradient from "../FixedGradient";

const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <NavBar />
      <div className={styles.children}>{children}</div>
      <FixedGradient />
    </main>
  );
};

export default Layout;
