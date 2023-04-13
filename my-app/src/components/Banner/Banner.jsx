import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.sec}>
      <div className={styles.bgImg}></div>
      <div className={styles.overlayDiv}>
        <h2 className={styles.h2}>Shop With US</h2>
        <p className={styles.p}>Best Products, High Quality</p>
      </div>
    </section>
  );
}
