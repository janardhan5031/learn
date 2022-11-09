import ExpenseDate from './ExpenseDate';
import Card from './card';

import './ExpenseItems.css'

function ExpenseItem(prop) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={ prop.obj.date}/>
            <div className='expense-item__description'>
                <h2>{ prop.obj.desc}</h2>
                <div className='expense-item__price'>{ prop.obj.price}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;