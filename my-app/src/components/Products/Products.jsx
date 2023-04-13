import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/firebase";
import styles from "./Products.module.css";
import ProductCard from "../ProductCard/ProductCard";
export default function Products() {
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery(["products"], () => getProducts());
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error}</p>}
      <ul className={styles.ul}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
