import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Navbar from './Components/Navbar';
import CurrentKPI from './Components/CurrentKPI';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Navbar/>
      <CurrentKPI/>
    </div>
  );
}

export default App;
