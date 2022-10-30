import React, { useState } from 'react'
import expenseContext from "./expenseContext";
import axios from 'axios';

const ExpenseState = (props) => {
  const host = "http://127.0.0.1:8000/"

  const [expenses, setExpenses] = useState([])
  const [expensesApprover, setExpensesApprover] = useState([])
  const [singleExpense, setSingleExpense] = useState([])


  //Get all the expenses
  const getExpenses = async (filter) => {
    const response = await fetch(`${host}api/core/expense?filter=${filter}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const jsonData = await response.json();
    if (filter === 'approver') {
      setExpensesApprover(jsonData['data'])
      console.log(jsonData['data'])
    }
    else
      setExpenses(jsonData['data']);
    console.log(jsonData['data']);
  }

  //Get a single expense
  const getASingleExpense = async (id) => {
    const response = await fetch(`${host}api/core/expense-detail?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const jsonData = await response.json();
    setSingleExpense(jsonData['data']);
    console.log(jsonData['data'])
  }

  //Add an expense
  const addExpense = async (category, date, amount, comments, reciept) => {
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    }

    let formData = new FormData();
    formData.append("category", category);
    formData.append("date", date);
    formData.append("amount", amount);
    formData.append("comments", comments);
    formData.append("reciept", reciept);

    axios.post(`${host}api/core/expense`, formData, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //Approve or reject the expense
  const approveRejectExpense = async (id, operation, comments) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    let formData = new FormData();
    formData.append("comments", comments);

    axios.post(`${host}api/core/expense-approval?id=${id}&operation=${operation}`, formData, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }



  return (
    <expenseContext.Provider value={{ expenses, expensesApprover, singleExpense ,getExpenses, addExpense, getASingleExpense, approveRejectExpense }}>
      {props.children}
    </expenseContext.Provider>
  )
}

export default ExpenseState