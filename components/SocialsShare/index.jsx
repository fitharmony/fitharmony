import React from "react";
import styles from "./SocialsShare.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";

const SocialsShare = ({ blogTitle = "blog" }) => {
  const router = useRouter();
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <aside className={styles.socialsCtr}>
      <a
        className={styles.fb}
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />{" "}
        Share
      </a>
      <a
        className={styles.x}
        href={`https://x.com/intent/tweet?text=Check%20out%20this%20blog%20about%20${encodeURIComponent(
          blogTitle
        )}!&url=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/X-Icon-White.png"}
          className={styles.socialIcon}
          width={14}
          height={14}
        />
        Share
      </a>
    </aside>
  );
};

export default SocialsShare;
