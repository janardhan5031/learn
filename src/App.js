import ExpenseItem from './componenents/ExpenseItems'

function App() {
  const data = [
    { location: 'hyd', price: 10, desc: 'food' },
    { location: 'hyd', price: 100, desc: 'petrol' },
    { location: 'hyd', price: 200, desc: 'movie' }
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
