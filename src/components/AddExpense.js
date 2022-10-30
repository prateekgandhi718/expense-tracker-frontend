import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import expenseContext from '../context/expenses/expenseContext'

const AddExpense = () => {
  const context = useContext(expenseContext)
  const { addExpense } = context


  // 'date': date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
  // let date = new Date();
  const [expense, setExpense] = useState({
    'category': "",
    'date' : "",
    'amount': 0,
    'comments': "",
  })
  const [reciept, setReciept] = useState(null)

  const onChange = (e) => {
    if ([e.target.name] == 'image') {
      setReciept({ imageDataType: e.target.files });
      console.log(e.target.files)
    } else {
      setExpense({ ...expense, [e.target.name]: e.target.value })
    }
    console.log(expense)
    console.log(reciept.imageDataType)
  }

  const handleSubmit = () => {
    //expense.date is still a string. convert to date object?
    addExpense(expense.category, expense.date, expense.amount, expense.comments, reciept.imageDataType[0])
    console.log(reciept.imageDataType[0])
    //When you click add, the fields should be blank again therefore,
    setExpense({
      'category': "",
      'date': "",
      'amount': 0,
      'comments': "",
    })
    setReciept(null);
  }

  return (
    <>
      <div className="container d-flex justify-content-center">
        <form>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Expense Category</label>
            <div id="emailHelp" className="form-text" style={{ marginTop: "-10px" }}>Ex: Grocery</div>
            <input type="text" className="form-control" id="category" name="category" onChange = {onChange} value={expense.category} required />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label" >Date</label>
            <input type="date" className="form-control" id="date" name="date" onChange = {onChange} value={expense.date} required />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Amount</label>
            <div id="emailHelp" className="form-text" style={{ marginTop: "-10px" }}>Enter a number. Ex: 201.3</div>
            <input type="number" className="form-control" id="amount" name="amount" onChange = {onChange} value={expense.amount} required />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Comments</label>
            <input type="text" className="form-control" id="comments" name="comments" onChange = {onChange} value={expense.comments} />
          </div>

          <div className="mb-3">
            <label htmlfor="post-image" className="form-label" >Reciept</label>
            <div id="emailHelp" className="form-text" style={{ marginTop: "-10px" }}>Optional</div>
            <input type="file" accept='image/*' className="form-control" id="post-image" name='image' onChange = {onChange} />
          </div>

        </form>
          <div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "black" }} onClick = {handleSubmit} >Add Exepense</button>
          </div>
      </div>

      <div className='container-fluid d-flex justify-content-center'>
        <div className='mt-5 p-5'>
          <Link to='/expenses'>
            <button className="btn btn-primary" style={{ backgroundColor: "black" }} >See all expenses &#8594;</button>
          </Link>
        </div>
        <div className='mt-5 p-5'>
          <Link to='/approver'>
            <button className="btn btn-primary" style={{ backgroundColor: "black" }} >Approver's Section &#128590;</button>
          </Link>
        </div>
      </div>

    </>
  )
}

export default AddExpense