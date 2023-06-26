import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Navbar from './Components/Navbar';
import CurrentKPI from './Components/CurrentKPI';
import DailyRise from './Components/DailyRise'
import TableArea from './Components/TableArea';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Navbar/>
      <CurrentKPI/>
      <DailyRise/>
      <TableArea/>
    </div>
  );
}

export default App;
