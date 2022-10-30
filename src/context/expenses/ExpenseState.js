import React from 'react'
import expenseContext from "./expenseContext";

const ExpenseState = (props) => {
  return (
    <expenseContext.Provider value={{}}>
        {props.children}
    </expenseContext.Provider>
  )
}

export default ExpenseState