import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import React from "react";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.map((el) => (
        <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
      ))}
    </Card>
  );
}

export default Expenses;
