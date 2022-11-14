
import ExpenseForm from './ExpenseForm'

import './newExpense.css'

function newExpense(prop) {

    const saveExpense = (Expense) => {
        const newExpense = { ...Expense, id: Math.random().toString() }
        
        // console.log(newExpense)

        //calling the function in parent component through prop object to Execute it from here
        prop.onNewExpense(newExpense)
    }
     
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpense} />
        </div>
    )
}

export default newExpense;
