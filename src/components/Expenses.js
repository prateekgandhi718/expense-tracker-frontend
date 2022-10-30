import React, { useContext, useEffect } from 'react'
import expenseContext from '../context/expenses/expenseContext'
import ExpenseItem from './ExpenseItem'

const Expenses = () => {
  const context = useContext(expenseContext)
  const { expenses, getExpenses } = context

  useEffect(() => {
    getExpenses('all')
    // eslint-disable-next-line
  }, [])


  return (
    <div className='mx-3'>
      <div className='row my-3'>
        <h1 className='display-6'>Expenses.</h1>
        <div className='container'>
          {expenses.length === 0 && 'You have not added any expenses yet.'}
        </div>
        {expenses.map((element) => {
          return <ExpenseItem key={element.id} expenseProp={element} />
        })}
      </div>
    </div>
  )
}

export default Expenses