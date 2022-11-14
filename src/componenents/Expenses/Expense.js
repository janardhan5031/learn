import React ,{ useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

import './Expense.css';

function Expense(prop) {

    let [filteredYear,setYear] = useState('2022')

    function filteredYearHandler(year) {
        setYear(year)
    }

    const filteredExpense =prop.data.filter(obj => {
        return obj.date.getFullYear() == filteredYear;
    })

    return (
        <div className='expenses'>
            <ExpenseFilter onFilteredYear={filteredYearHandler} />
            <ExpensesList items={ filteredExpense} />
        </div>

    )
}
export default Expense;