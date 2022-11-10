

import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';

import './ExpenseItems.css'

function ExpenseItem(prop) {
    // useState function is only works in component function and it take value as argument and return arry of items
    // [value(to be changed),function(to change the value)]

    const { date, desc, price } = prop.obj;

    return (
        <Card className= 'expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{ desc}</h2>
                <div className='expense-item__price'>{ price}</div>
            </div>
        
        </Card>
    )
}

export default ExpenseItem;