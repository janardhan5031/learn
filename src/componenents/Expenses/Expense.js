import React ,{ useState } from 'react';

import ExpenseItem from './ExpenseItems';

import './Expense.css';

function Expense(prop) {

    let [expenseList,setFun] = useState(prop.data)

    function deleteHandler(idx) {
        setFun(expenseList.filter((vl, index) => index !== idx))
        console.log(expenseList)
        
    }

    return (
        <div className='expenses'>
            {
                expenseList.map((ele, idx) => (
                    <div className='inner_div' key={idx}>
                        <ExpenseItem obj={ele} >
                        </ExpenseItem>
                        <button onClick={() => deleteHandler(idx)} >delete</button>
                    </div>
                ))
            }
        
        </div>

    )
}
export default Expense;