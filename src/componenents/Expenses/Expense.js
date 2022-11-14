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
            <ExpenseFilter onFilteredYear={filteredYearHandler} />
            { filteredExpense.length ==0 && <p> There is no Expenses</p>}
            { filteredExpense.length>0 && filteredExpense.map((ele) => (
                    <div className='inner_div' key={ele.id}>
                        <ExpenseItem obj={ele} >
                        </ExpenseItem>
                        {/* <button onClick={() => deleteHandler(idx)} >delete</button> */}
                        { filteredExpense.length==1 && <p>Only single Expense here. Please add more...</p>}
                    </div>
                    
                ))
            }
        
        </div>

    )
}
export default Expense;