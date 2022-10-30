import React, { useContext } from 'react'
import expenseContext from '../context/expenses/expenseContext'
import { saveAs } from "file-saver";

const Expense = () => {
  const context = useContext(expenseContext)
  const {singleExpense} = context
  const host = "https://assessmentstgacc.blob.core.windows.net/prateek-expenses-container";

  const downloadImage = () => {
    saveAs(`${host}${singleExpense.reciept}`, "your_image.jpg");
  };

  return (
    <div className=" container d-flex my-3  justify-content-center">

      <div className="d-flex flex-column align-items-center">
        <h3 className="display-6 py-3 px-3" >
          {singleExpense.category}
        </h3>
        <small className="text-muted" >Date: {singleExpense.date} </small>
        <small className="text-muted" >Amount in INR: {singleExpense.amount}</small>

        <p className="lead" style={{ wordWrap: 'break-word', marginTop: '1rem' }}>
          <em>Comments: {singleExpense.comments}
          </em>
        </p>

        <img
          src={`${host}${singleExpense.reciept}`}
          alt="title"
          className="img-fluid"
          style={{ width: "20rem", marginBottom: "1.5rem", borderRadius: "2rem" }}
        />

        <p className="lead" style={{ wordWrap: 'break-word', marginTop: '1rem' }}>
          <em>Status: {singleExpense.status}
          </em>
        </p>

        <button type="button" className="btn btn-dark" onClick={downloadImage}>
          Download the reciept.
        </button>
      </div>


    </div>
  )
}

export default Expense