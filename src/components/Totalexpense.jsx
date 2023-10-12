import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
const Totalexpense = () => {
  const {expenses} =useContext(AppContext);
  const TotalExpense=expenses.reduce((total,item)=>total+item.cost,0);
  return (
    <div>
      <h2>$ {TotalExpense} </h2>
    </div>
  )
}

export default Totalexpense
