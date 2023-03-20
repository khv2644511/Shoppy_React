import React from "react";
import styles from "./User.module.css";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="header-user">
      <img className={styles.Img} src={photoURL} alt={displayName} />
      <span className="user-name">{displayName}</span>
    </div>
  );
}
