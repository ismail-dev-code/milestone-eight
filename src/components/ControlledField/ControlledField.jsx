import React, { useState } from "react";

const ControlledField = () => {
const [name, setName] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 6) {
      setError("password should be 6 or longer");
    } else {
      setError("");
    }
  };
  const handleEmailChange = e =>{
    setEmail(e.target.value);
  }
  const handleNameChange = e =>{
    setName(e.target.value);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);

    if (password.length < 6) {
      setError("password must be 6 digit character or longer");
    } else {
      setError("");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your name" onChange={handleNameChange} defaultValue={name} /> <br />
        <input type="email" onChange={handleEmailChange} defaultValue={email} placeholder="email" required /> <br />
        <input
          type="password"
          onChange={handleOnChangePassword}
          defaultValue={password}
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
