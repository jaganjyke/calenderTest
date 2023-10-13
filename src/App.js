import './App.css';
import Calendar from './calender';

function App() {
  const someDate = new Date('03/10/2022');
  return (
    <div>
      <h1>calendar Test</h1>
      <Calendar date={someDate} />
    </div>
  );
}

export default App;
