
import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm( prop) {

    const [titleEntered,titleSet] = useState('')
    const [amountEntered,amountSet] = useState('')
    const [dateEntered,dateSet] = useState('')

    const titleHandler = (e) => {
        // store the every input change in state variable
        titleSet(e.target.value)
    }
    
    const amountHandler = (e) => {
        amountSet(e.target.value)
    }

    const dateHandler = (e) => {
        dateSet(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();
        const expenseData = {
            desc: titleEntered,
            price: amountEntered,
            date :new Date( dateEntered)
        }

        // console.log(expenseData)
        prop.onSaveExpense(expenseData)

        // set the default empty values
        titleSet('');
        amountSet('');
        dateSet('')
    }

    const [addForm, setAddForm] = useState('form_remove')
    const [add_btn,set_add_btn] = useState('')

    function add_Expense_btn_handler() {
        setAddForm('')
        set_add_btn('remove_add_btn')
    }

    function remove_btn_handler() {
        setAddForm('form_remove');
        set_add_btn('')
    }
    
    return (
        <div>
            <button onClick={add_Expense_btn_handler} className={add_btn }>Add Expense</button>
            <form onSubmit={submitHandler} className={ addForm}>
                <div  className='new-expense__controls'> 
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={titleEntered} onChange={titleHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label >Amount</label>
                        <input type= 'number' min="0.01" step="0.01" value={amountEntered} onChange={amountHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Dates</label>      
                        <input type='date'min="2019-01-01" max="2022-12-31" value={dateEntered} onChange={dateHandler}/>
                    </div>

                </div>
                <div className="new-expense__actions">
                    <button onClick={remove_btn_handler}>cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>

    )
}

export default ExpenseForm;
