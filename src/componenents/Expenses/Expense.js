import React ,{ useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItems';

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
            <ExpenseFilter onFilteredYear={ filteredYearHandler} />
            {
                filteredExpense.map((ele, idx) => (
                    <div className='inner_div' key={idx}>
                        <ExpenseItem obj={ele} >
                        </ExpenseItem>
                        {/* <button onClick={() => deleteHandler(idx)} >delete</button> */}
                    </div>
                ))
            }
        
        </div>

    )
}
export default Expense;