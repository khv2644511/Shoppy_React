import React from "react";
import { BsCart4 } from "react-icons/bs";
import { getCart } from "../../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthcontext } from "../../context/AuthContext";
import styles from "./CartStatus.module.css";

export default function CartStatus() {
  const { uid } = useAuthcontext();

  const { data: products } = useQuery(["carts"], () => getCart(uid));

  return (
    <div className={styles.div}>
      <BsCart4 className={styles.cartIcon} />
      {products && <p className={styles.count}>{products.length}</p>}
    </div>
  );
}
