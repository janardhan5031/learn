import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';

import './ExpenseItems.css'

function ExpenseItem(prop) {
    // useState function is only works in component function and it take value as argument and return arry of items
    // [value(to be changed),function(to change the value)]

    const [title,setTitle] = useState(prop.obj.desc)

    const deleteHandler = () => {
        setTitle('jani');
        
        
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={ prop.obj.date}/>
            <div className='expense-item__description'>
                <h2>{ title}</h2>
                <div className='expense-item__price'>{ prop.obj.price}</div>
            </div>
            <button onClick={deleteHandler}>Delete</button>
        </Card>
    )
}

export default ExpenseItem;