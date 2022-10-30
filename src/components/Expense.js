import React from 'react'

const Expense = () => {
  return (
    <div className=" container d-flex my-3  justify-content-center">

      <div className="d-flex flex-column align-items-center">
        <h3 className="display-6 py-3 px-3" >
          "category"
        </h3>
        <small className="text-muted" >Date : </small>
        <small className="text-muted" >Amount : </small>

        <p className="lead" style={{ wordWrap: 'break-word', marginTop: '1rem' }}>
          <em>comments
          </em>
        </p>

        <img
          // src={`${host}${singleProduct.image}`}
          alt="titel"
          className="img-fluid"
          style={{ width: "20rem", marginBottom: "1.5rem", borderRadius: "2rem" }}
        />

        <p className="lead" style={{ wordWrap: 'break-word', marginTop: '1rem' }}>
          <em>Status
          </em>
        </p>

        <button type="button" className="btn btn-dark">
          Download the reciept.
        </button>
      </div>


    </div>
  )
}

export default Expense