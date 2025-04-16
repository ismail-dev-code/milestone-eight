import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import Brother from "./Brother";
import "./FamilyTree.css";
export const MoneyContext = createContext(0);
export const AssetContext = createContext("");

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const newAsset = "gold";
  const asset = "diamond";

  return (
    <div className="family-tree">
      <h3>Family Tree</h3>
      <h4>total money family: {money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
