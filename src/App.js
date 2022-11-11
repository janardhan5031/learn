
import NewExpense from "./componenents/newExpense/newExpense";
import Expense from "./componenents/Expenses/Expense";

function App() {
  const data = [
    { date: new Date(2022,1,10), price: 10, desc: 'food' },
    { date: new Date(2022,2,11), price: 100, desc: 'petrol' },
    { date: new Date(2022,5,20), price: 200, desc: 'movie' }
  ];

  function newExpense(Expense) {
    console.log( 'from app ' ,Expense)
  }



  return (
    <div>
      HELLO THERE hfddhfh
      <NewExpense onNewExpense={ newExpense} />
      <Expense data={data}></Expense>
  
    </div>
  );
}

export default App;
