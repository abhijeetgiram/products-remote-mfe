import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "../styles/ProductList.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

const mockProducts: Product[] = [
  { id: 1, name: "Laptop", price: 899 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Headphones", price: 149 },
];

const ProductListPage: React.FC = () => {
  const [products] = useState<Product[]>(mockProducts);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product List</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
