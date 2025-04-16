import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    //   console.log(name, price, quantity);

    if (price.length < 0) {
      setError("please provide a valid price amount");
      return;
    } else if (name.length === 0) {
      setError("please do not keep the name field empty");
      return;
    } else if (quantity.length < 0) {
      setError("do not keep quantity empty");
      return;
    } else if (price.length === 0) {
      setError("do not keep price empty");
      return;
    } else if (price < 0) {
      setError("price can not be negative");
      return;
    } else {
      setError("");
    }

    const newProducts = {
      name,
      price,
      quantity,
    };

    handleAddProduct(newProducts);

    //   console.log(newProducts);
  };
  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" /> <br />
        <input type="number" name="price" placeholder="Product Price" /> <br />
        <input
          type="number"
          name="quantity"
          placeholder="Product Quantity"
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
