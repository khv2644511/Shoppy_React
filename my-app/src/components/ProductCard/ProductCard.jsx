import React from "react";
import styles from "./ProductCard.module.css";
export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className={styles.li}>
      <img className={styles.img} src={image} alt={title} />
      <div className={styles.div}>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.divP}>{`￦${price}`}</p>
      </div>
      <p className={styles.p}>{category}</p>
    </li>
  );
}
