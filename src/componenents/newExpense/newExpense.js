import React, { useState } from "react";
import ExpenseForm from './ExpenseForm'

import './newExpense.css'

function NewExpense(prop) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpense = (Expense) => {
        const newExpense = { ...Expense, id: Math.random().toString() }
        
        // console.log(newExpense)

        //calling the function in parent component through prop object to Execute it from here
        prop.onNewExpense(newExpense)
    }

    
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
     
    return (
        <div className="new-expense">
            { !isEditing && <button onClick={startEditingHandler}>Add Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpense={saveExpense} onCancel={ stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;
