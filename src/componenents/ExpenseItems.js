
import './ExpenseItems.css'

function ExpenseItem(prop) {
    return (
        <div>
            <div className='expense-item'>
                <div>{prop.obj.location}</div>
                <div className='expense-item__description'>
                    <h2>{ prop.obj.desc}</h2>
                    <div className='expense-item__pice'>{ prop.obj.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;