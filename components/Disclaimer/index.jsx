import React from "react";
import styles from "./Disclaimer.module.scss";

const Disclaimer = ({ text, style = { marginTop: "1em" } }) => {
  return (
    <aside
      className={styles.disclaimer}
      aria-label="Disclaimer"
      style={style}
      role="alert"
    >
      <strong>DISCLAIMER:</strong>{" "}
      {text ||
        `The information provided in this blog is for
      general informational purposes only and is not intended as, nor should it
      be considered a substitute for professional medical advice, diagnosis, or
      treatment. Do not use the information on this website for diagnosing or
      treating any medical or health condition. If you have or suspect you have
      a medical problem, promptly contact your professional healthcare provider.`}
    </aside>
  );
};

export default Disclaimer;
