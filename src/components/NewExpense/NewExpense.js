import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }


    const startEditingHandler = ()=> {
        setIsEditing(true)
    }
    const stopEdititngHandler = () =>{
        setIsEditing(false)
    }

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdititngHandler}/>}
        </div>
    )
}

export default NewExpense;