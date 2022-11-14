
import ExpenseItem from './ExpenseItems'
import './ExpensesList.css'

function ExpensesList(prop) {

    if (prop.items.length == 0) {
        return <h2 className='expenses-list__fallback'> no records found</h2>
    }
    
    return (
        <div className='expenses-list'>
            {
                prop.items.map((ele) => (
                    <div className='inner_div' key={ele.id}>
                        <ExpenseItem obj={ele} >
                        </ExpenseItem>
                        {prop.items.length == 1 && <p>Only single Expense here. Please add more...</p>}
                    </div>
                ))

            }
        </div>
    
    )

}

export default ExpensesList;