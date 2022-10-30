import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseItemApprover = (props) => {
    return (
        <div className="col-md-3">
            <div className="card border-info my-3">
                <div className="card-body text-dark" >
                    <Link className='d-flex justify-content flex-column my-2' to="/expenses/expense" style={{ textDecoration: "none", cursor: "pointer" }}>
                        <h5 className="card-title" style={{ color: "#22aba4" }}>{props.expenseProp.category}</h5>
                        <p className="card-text" style={{ color: "#198a84" }}>Date: {props.expenseProp.date}</p>
                        <p className="card-text" style={{ color: "#198a84" }}>Amount: ₹{props.expenseProp.amount}</p>
                        <p className="card-text" style={{ color: "#198a84" }}>Comments: {props.expenseProp.comments}</p>
                        <p className="card-text" style={{ color: "#198a84" }}>Status: {props.expenseProp.status}</p>
                    </Link>
                    <form className='mb-5'>
                        <label htmlFor="description" className="form-label">Comments</label>
                        <input type="text" className="form-control" id="comments" name="comments" />
                    </form>
                    <div className='d-flex justify-content-between'>
                        <button type="submit" className="btn btn-outline-success btn-sm" >Approve</button>
                        <button type="submit" className="btn btn-outline-danger btn-sm" >Reject</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ExpenseItemApprover