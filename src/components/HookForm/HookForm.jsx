import React from "react";
import useInputField from "../hooks/UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="text"
          onChange={nameOnChange}
          defaultValue={name}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={emailOnChange}
          defaultValue={email}
        />
        <br />
        <input
          type="password"
          name="password"
          defaultValue={password}
          onChange={passwordOnChange}
          placeholder="password"
        /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
