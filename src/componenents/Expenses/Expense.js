import React ,{ useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import ExpensesList from './ExpensesList';

import './Expense.css';

function Expense(prop) {

    let [filteredYear,setYear] = useState('2022')

    function filteredYearHandler(year) {
        setYear(year)
    }

    const filteredExpense =prop.data.filter(obj => {
        return obj.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div className='expenses'>
            <ExpenseFilter onFilteredYear={filteredYearHandler} />
            <ExpenseChart expenses={ filteredExpense} />
            <ExpensesList items={ filteredExpense} />
        </div>

    )
}
export default Expense;