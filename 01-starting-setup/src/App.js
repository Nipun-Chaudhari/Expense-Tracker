import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car Interior Decoration",
    amount: 300.07,
    date: new Date(2023, 2, 5), // format --> year,month-1,date
  },
  {
    id: "2",
    title: "Grocery",
    amount: 5.75,
    date: new Date(2023, 8, 9),
  },
  {
    id: "3",
    title: "Stationary",
    amount: 10.05,
    date: new Date(2023, 8, 19),
  },
  {
    id: "4",
    title: "Printer",
    amount: 90.52,
    date: new Date(2023, 8, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
