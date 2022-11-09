
import './ExpenseItems.css'

function ExpenseItem() {
    return (
        <div>
            <div className='expense-item'>
                <div>hyderbad</div>
                <div className='expense-item__description'>
                    <h2>food</h2>
                    <div className='expense-item__pice'>10</div>
                </div>
            </div>
            <div className='expense-item'>
                <div>kakinada</div>
                <div className='expense-item__description'>
                    <h2>petrol</h2>
                    <div className='expense-item__pice'>100</div>
                </div>
            </div>
            <div className='expense-item'>
                <div>hyderbad</div>
                <div className='expense-item__description'>
                    <h2>movie</h2>
                    <div className='expense-item__pice'>200</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;