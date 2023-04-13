import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p>{`￦${price}`}</p>
      </div>
    </li>
  );
}
