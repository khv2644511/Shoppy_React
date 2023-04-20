import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/ui/Button";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, category, price, description, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {};
  return (
    <>
      <p className={styles.category}>{category}</p>
      <section className={styles.sec}>
        <img className={styles.img} src={image} alt={title} />
        <div className={styles.div}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>￦{price}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.option}>
            <label className={styles.label} htmlFor="select">
              옵션:
            </label>
            <select
              id="select"
              className={styles.select}
              value={selected}
              onChange={handleSelect}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
