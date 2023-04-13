import React from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      className={styles.li}
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <img className={styles.img} src={image} alt={title} />
      <div className={styles.div}>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.divP}>{`￦${price}`}</p>
      </div>
      <p className={styles.p}>{category}</p>
    </li>
  );
}
