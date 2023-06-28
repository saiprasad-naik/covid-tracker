import "./App.css";
import Navigation from "./Components/Navigation";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StateDetails from "./Components/StateDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Navbar />

      
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
        <Routes>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/StateDetails/:stateName" element={<StateDetails />}></Route>
        </Routes>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
