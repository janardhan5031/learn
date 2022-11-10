import ExpenseItem from './ExpenseItems';

import './Expense.css';

function Expense(prop) {
    return (
        <div className='expenses'>
            <ExpenseItem obj={prop.data[0]}></ExpenseItem>
            <ExpenseItem obj={prop.data[1]}></ExpenseItem>
            <ExpenseItem obj={prop.data[2]}></ExpenseItem>
        </div>

    )
}
export default Expense;