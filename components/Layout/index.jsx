import React from "react";
import styles from "./Layout.module.scss";
import NavBar from "../NavBar/NavBar";
import FixedGradient from "../FixedGradient";
import Footer from "../Footer";

const Layout = ({
  children,
  showNav = true,
  navTheme = "dark",
  showGradient = true,
  style = {},
  childrenStyle = {},
}) => {
  return showNav ? (
    <main className={styles.layout} style={style}>
      <NavBar navTheme={navTheme} />
      <div className={styles.children} style={childrenStyle}>
        {children}
      </div>
      {showGradient && <FixedGradient />}
    </main>
  ) : (
    <div className={`${styles.layout} ${styles.noNav}`} style={style}>
      <div className={styles.children}>{children}</div>
      {showGradient && <FixedGradient />}
    </div>
  );
};

export default Layout;
