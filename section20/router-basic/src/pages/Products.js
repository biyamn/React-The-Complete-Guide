import React from 'react';
import { Link } from "react-router-dom";

const PRODUCTS = [
  {id: 'p1', title: 'Product 1'},
  {id: 'p2', title: 'Product 2'},
  {id: 'p3', title: 'Product 3'},
]

// Link to에서 '/products'는 절대적 경로이고 'products'는 상대적 경로이다.
// 즉, 'products'는 현재 경로에서 '/products'를 붙인 것과 같다.
const Products = () => {
  return (
  <>
    <h1>The Products page</h1>
    <ul>
      {PRODUCTS.map(product => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  </>
  )
};

export default Products;