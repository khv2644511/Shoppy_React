import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { addOrUpdateToCart, removeFromCart } from "../../api/firebase";
import styles from "./CartItem.module.css";

export default function CartItem({
  product,
  uid,
  product: { id, image, option, price, quantity, title },
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id);
  return (
    <li className={styles.li}>
      <img className={styles.img} src={image} alt={title} />
      <div className={styles.div}>
        <div className={styles.desc}>
          <p className={styles.title}>{title}</p>
          <p className={styles.option}>{option}</p>
          <p className={styles.price}>￦{price}</p>
        </div>
        <div className={styles.quantity}>
          <AiOutlineMinusSquare
            className={styles.minus}
            onClick={handleMinus}
          />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={styles.plus} onClick={handlePlus} />
          <FaTrashAlt className={styles.delete} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
