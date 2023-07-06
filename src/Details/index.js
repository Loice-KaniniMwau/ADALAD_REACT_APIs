
import React from "react";
import Products from "../Products";
import "./style.css";

const Details = ({ productId, products }) => {
  const selectedProduct = products.find((item) => item.id === productId);

  return (
    <div className="details">
      <h2>Product Details</h2>
      <h2>{selectedProduct.title}</h2>
      <p>{selectedProduct.description}</p>
      <h2>{selectedProduct.price}</h2>
      <h2>{selectedProduct.discountPercentage}</h2>
      {/* Render other details of the selected product */}
    </div>
  );
};

export default Details;


