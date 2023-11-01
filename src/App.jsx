import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Remaining from "./components/Remaining";
import Totalexpense from "./components/Totalexpense";
import ExpenseForm from "./components/ExpenseForm";
import { AppProvider } from "./Context/AppContext";
function App() {
  return (
    <AppProvider>
      <div className="container mx-auto  grid md:grid-cols-3 gap-3   md:gap-5 px-5 mt-20">
        <div className="bg-green-300 p-3 rounded-xl shadow-2xl flex space-x-4 ">
          <div>Budget :</div>{" "}
          <div>
            <Budget />
          </div>
        </div>
        <div>
          {" "}
          <Remaining />
        </div>
        <div className="bg-slate-400 p-3 rounded-xl shadow-2xl flex space-x-4">
          {" "}
          <div>Total expenses : </div>{" "}
          <div>
            <Totalexpense />
          </div>
        </div>
      </div>
      <div class="bg-white overflow-hidden shadow-sm rounded-lg p-6 container mx-auto px-5 mt-10">
        <h1 className="text-3xl mb-5">Expenses</h1>
        <ExpenseList />
      </div>
      <div className="container mx-auto px-5 mt-10 shadow-sm rounded-lg py-10 ">
        <ExpenseForm />
      </div>
    </AppProvider>
  );
}

export default App;
