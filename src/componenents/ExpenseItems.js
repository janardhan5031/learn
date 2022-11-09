import ExpenseDate from './ExpenseDate';

import './ExpenseItems.css'

function ExpenseItem(prop) {
    return (
        <div>
            <div className='expense-item'>
                <ExpenseDate date={ prop.obj.date}/>
                <div className='expense-item__description'>
                    <h2>{ prop.obj.desc}</h2>
                    <div className='expense-item__price'>{ prop.obj.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;