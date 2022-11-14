
import React,{ useState} from "react";

import NewExpense from "./componenents/newExpense/newExpense";
import Expense from "./componenents/Expenses/Expense";

const data = [
  { date: new Date(2022,1,10), price: 10, desc: 'food' },
  { date: new Date(2022,2,11), price: 100, desc: 'petrol' },
  { date: new Date(2022,5,20), price: 200, desc: 'movie' }
];

function App() {
  
  const [updated_data,setUpdated_data] = useState(data)
  
  console.log(updated_data)
  function newExpense(Expense) {
    console.log('from app ', Expense);
    setUpdated_data((previous) => {
      return [Expense,...previous]
    })

    // else we can do 
    // setUpdated_data([Expense,updated_data])
  }



  return (
    <div>
      HELLO THERE hfddhfh
      <NewExpense onNewExpense={ newExpense} />
      <Expense data={updated_data}></Expense>
  
    </div>
  );
}

export default App;
