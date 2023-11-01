import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";
const ExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_Expense",
      payload: expense,
    });
    setName("");
    setCost("");
  };
  return (
    <>
      <form class="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={name}
            
            onChange={(e) => setName(e.target.value)}
            class="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label for="cost" class="block text-sm font-medium text-gray-700">
            Cost
          </label>
          <input
            required
            type="number"
            id="cost"
            name="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="Enter cost"
            class="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button className="bg-blue-500 px-7 rounded-md cursor-pointer text-white">
          Add
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
