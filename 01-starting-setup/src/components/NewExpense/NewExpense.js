import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const openEditor = () =>{
    setIsEditing(true);
  }

  const closeEditor = () =>{
    setIsEditing(false);
  }
  
  return (
    <div className="new-expense">
      {!isEditing && <buttons className="newClass" onClick = {openEditor}>Add New Expense</buttons>}
      {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {closeEditor}/>}
    </div>
  );
};

export default NewExpense;
