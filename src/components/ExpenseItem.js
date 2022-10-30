import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import expenseContext from '../context/expenses/expenseContext'

const ExpenseItem = (props) => {
  const context = useContext(expenseContext)
  const {getASingleExpense} = context


  return (
    <div className="col-md-3">
      <div className="card border-info my-3">
        <div className="card-body text-dark" >
          <Link className='d-flex justify-content flex-column my-2' to="/expenses/expense" style={{ textDecoration: "none", cursor: "pointer" }} onClick = {() => {getASingleExpense(props.expenseProp.id)}}>
            <h5 className="card-title" style={{ color: "#22aba4" }}>{props.expenseProp.category}</h5>
            <p className="card-text" style={{ color: "#198a84" }}>Date: {props.expenseProp.date}</p>
            <p className="card-text" style={{ color: "#198a84" }}>Amount: ₹{props.expenseProp.amount}</p>
            <p className="card-text" style={{ color: "#198a84" }}>Comments: {props.expenseProp.comments}</p>
            <p className="card-text" style={{ color: "#198a84" }}>Status: {props.expenseProp.status}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem