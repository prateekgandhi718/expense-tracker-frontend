import React from 'react'
import { Link } from 'react-router-dom'

const AddExpense = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <form>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Expense Category</label>
            <div id="emailHelp" className="form-text" style={{ marginTop: "-10px" }}>Ex: Grocery</div>
            <input type="text" className="form-control" id="category" name="category" required />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label" >Date</label>
            <input type="date" className="form-control" id="date" name="date" required />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Amount</label>
            <div id="emailHelp" className="form-text" style={{ marginTop: "-10px" }}>Enter a number. Ex: 201.3</div>
            <input type="number" className="form-control" id="amount" name="amount" required/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Comments</label>
            <input type="text" className="form-control" id="comments" name="comments" />
          </div>

          <div className="mb-3">
            <label htmlfor="post-image" className="form-label" >Reciept</label>
            <div id="emailHelp" className="form-text" style={{ marginTop: "-10px" }}>Optional</div>
            <input type="file" accept='image/*' className="form-control" id="post-image" name='reciept' />
          </div>

          <div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "black" }} >Add Exepense</button>
          </div>
        </form>
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