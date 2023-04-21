import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthcontext } from "../../context/AuthContext";
import { getCart } from "../../api/firebase";
import CartItem from "../../components/CartItem/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import styles from "./MyCart.module.css";
import PriceCard from "../../components/PriceCard/PriceCard";
import Button from "../../components/ui/Button";
const SHIPPING = 3000;
export default function MyCart() {
  const { uid } = useAuthcontext();

  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) =>
        parseInt(prev) + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className={styles.sec}>
      <p className={styles.pagetitle}>내 장바구니</p>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className={styles.ul}>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className={styles.price}>
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className={styles.plus} />
            <PriceCard text="배송비" price={SHIPPING} />
            <FaEquals className={styles.equals} />
            <PriceCard text="총 금액" price={totalPrice + SHIPPING} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
