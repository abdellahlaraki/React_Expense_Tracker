import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";
const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  
  return (
    <>
      <table class="min-w-full divide-y divide-gray-200 text-center">
        <thead class="bg-gray-50">
          <tr>
            
            <th class="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th class="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cost
            </th>
            <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase ">
              action
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200  ">
          {expenses.map((expense, index) => (
            
            <ExpenseItem
              key={index}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
