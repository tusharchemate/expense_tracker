import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    { title: 'BMW Insurance', amount: 32211, date: new Date(2023, 1, 3) },
    { title: 'AUDI expense', amount: 3221, date: new Date(2023, 1, 3) },
    { title: 'Honda expense', amount: 3221, date: new Date(2023, 1, 3) },
    { title: 'Merc expense', amount: 322111, date: new Date(2023, 1, 3) },
    { title: 'Tesla expense', amount: 321121, date: new Date(2023, 1, 3) },
  ];

  return (
    <div className="App">
      {expenses?.map((item) => (
        <ExpenseItem
          title={item.title}
          date={item.date.toISOString()}
          amount={item.amount}
        />
      ))}
    </div>
  );
}

export default App;
