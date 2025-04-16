import React, { createContext } from "react";
import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = ({asset}) => {
   

  return (
    <div>
      <h2>Grandpa is here</h2>
      <section>
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Aunt asset={asset}></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
