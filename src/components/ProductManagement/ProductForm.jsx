import React from "react";

const ProductForm = () => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
  const name = e.target.name.value;
  const price = e.target.price.value;
  const quantity = e.target.quantity.value;
//   console.log(name, price, quantity);
  const newProducts = {
    name, price, quantity
  }
  console.log(newProducts);
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
    </div>
  );
};

export default ProductForm;
