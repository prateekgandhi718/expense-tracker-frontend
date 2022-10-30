import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseItem = () => {
  return (
    <div className="col-md-3">
      <div className="card border-info my-3">
        <div className="card-body text-dark" >
          <Link className='d-flex justify-content-between my-2' to="/expenses/expense" style={{ textDecoration: "none", cursor: "pointer" }}>
            <h5 className="card-title" style={{ color: "#22aba4" }}>category</h5>
            <p className="card-text" style={{ color: "#198a84" }}>date</p>
            <p className="card-text" style={{ color: "#198a84" }}>amount</p>
            <p className="card-text" style={{ color: "#198a84" }}>comments</p>
            <p className="card-text" style={{ color: "#198a84" }}>status</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem