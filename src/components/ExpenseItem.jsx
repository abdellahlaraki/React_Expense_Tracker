import React, { useContext } from "react";
import {BiSolidTrashAlt} from "react-icons/bi"
import { AppContext } from "../Context/AppContext";
const ExpenseItem = ({ id, name, cost }) => {
  const {dispatch} =useContext(AppContext);
  const handeDelte = () => {
    dispatch({
      type:"Delete_Expense",
      payload:id
    })
  };
  return (
    <>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap">{name}</td>
        <td class="px-6 py-4 whitespace-nowrap ">{cost} $</td>
        <td class="px-6 py-4 whitespace-nowrap ">
          <button onClick={handeDelte}><BiSolidTrashAlt color="red" /></button>
        </td>
      </tr>
    </>
  );
};

export default ExpenseItem;
