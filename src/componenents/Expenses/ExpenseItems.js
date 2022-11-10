import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';

import './ExpenseItems.css'

function ExpenseItem(prop) {
    // useState function is only works in component function and it take value as argument and return arry of items
    // [value(to be changed),function(to change the value)]

    const { date, desc, price } = prop.obj;

    const [visibility,setvisibility] = useState('expense-item');

    const deleteHandler = () => {
        setvisibility('visibility');

        
    }

    return (
        <Card className= {visibility}>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{ desc}</h2>
                <div className='expense-item__price'>{ price}</div>
            </div>
            <button onClick={deleteHandler}>Delete</button>
        </Card>
    )
}

export default ExpenseItem;