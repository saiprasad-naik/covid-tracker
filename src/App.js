import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Navbar from './Components/Navbar';
import CurrentKPI from './Components/CurrentKPI';
import DailyRise from './Components/DailyRise'
import TableArea from './Components/TableArea';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
