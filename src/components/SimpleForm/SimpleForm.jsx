import React from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.name.value);
  console.log(e.target.email.value);
};

const SimpleForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="your name" />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
