import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {

  const [money, setMoney] = use(MoneyContext);
  
  return (
    <div>
      <h3>Brother is here</h3>
      <button onClick={() => setMoney(money + 1000)}>1000 add</button>
    </div>
  );
};

export default Brother;
