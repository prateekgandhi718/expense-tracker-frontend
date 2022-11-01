import React, { useContext, useEffect } from 'react'
import expenseContext from '../context/expenses/expenseContext'
import ExpenseItemApprover from './ExpenseItemApprover'

const Approver = () => {
  const context = useContext(expenseContext)
  const { expensesApprover, getExpenses } = context

  useEffect(() => {
    getExpenses('approver')
    // eslint-disable-next-line
  }, [])


  return (
    <div className='mx-3'>
      <div className='row my-3'>
        <h1 className='display-6'>Approver's Section.</h1>
        <div className='container'>
          {expensesApprover.length === 0 && 'No expenses to manually approve as of yet.'}
        </div>
        {expensesApprover.map((element) => {
          return <ExpenseItemApprover key={element.id} expenseProp={element} />
        })}
      </div>
    </div>
  )
}

export default Approver