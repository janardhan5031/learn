import ExpenseItem from './componenents/ExpenseItems'

function App() {
  const data = [
    { date: new Date(2022,1,10), price: 10, desc: 'food' },
    { date: new Date(2022,2,11), price: 100, desc: 'petrol' },
    { date: new Date(2022,5,20), price: 200, desc: 'movie' }
  ]
  return (
    <div>
      HELLO THERE hfddhfh
      <ExpenseItem obj={data[0]}></ExpenseItem>
      <ExpenseItem obj={data[1]}></ExpenseItem>
      <ExpenseItem obj={data[2]}></ExpenseItem>
    </div>
  );
}

export default App;
