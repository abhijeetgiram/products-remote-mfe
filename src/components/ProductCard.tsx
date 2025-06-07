import React from "react";
import styles from "../styles/ProductList.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.card}>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button className={styles.button}>View</button>
    </div>
  );
};

export default ProductCard;
