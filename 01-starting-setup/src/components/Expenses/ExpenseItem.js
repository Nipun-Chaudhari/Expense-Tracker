import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate= new Date(2023,8,19);
  // const expenseTitle = 'Car Interior';
  // const expenseAmount = 300.00;

  let title = props.title;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item_description">
          <h2>{title}</h2>
          <div className="expense-item_price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
