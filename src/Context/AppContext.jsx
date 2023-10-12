import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_Expense":
      return {...state,expenses:[...state.expenses,action.payload]}
      case "Delete_Expense":
        return {...state,expenses:state.expenses.filter(expense=>expense.id!==action.payload)}
        case "budget":
          return {...state,budget:action.payload}
    default:
      return state;
  }
};
const initialeState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "shopping", cost: 30 },
    { id: 2, name: "rent", cost: 140 },
    { id: 3, name: "coffe", cost: 10 },
    { id: 4, name: "phone", cost: 50 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialeState);
  const values = {
    budget: state.budget,
    dispatch,
    state,
    expenses:state.expenses,
  };
  return (
    <>
        <AppContext.Provider value={values}> {props.children} </AppContext.Provider>
    </>
  );
};
