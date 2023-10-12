import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);
  const TotalExpense = expenses.reduce((total, item) => total + item.cost, 0);
  const total= budget - TotalExpense;
  return (
    <div>
      <div className={total<=0?"bg-red-500 p-3 rounded-xl shadow-2xl flex space-x-4":"bg-gray-500 p-3 rounded-xl shadow-2xl flex space-x-4" }><h2> Remaining :  $ {total} </h2></div>
    </div>
  );
};

export default Remaining;
