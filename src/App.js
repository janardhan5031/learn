
import NewExpense from "./componenents/newExpense/newExpense";
import Expense from "./componenents/Expenses/Expense";

function App() {
  const data = [
    { date: new Date(2022,1,10), price: 10, desc: 'food' },
    { date: new Date(2022,2,11), price: 100, desc: 'petrol' },
    { date: new Date(2022,5,20), price: 200, desc: 'movie' }
  ]
  return (
    <div>
      HELLO THERE hfddhfh
      <NewExpense />
      <Expense data={data}></Expense>
  
    </div>
  );
}

export default App;
