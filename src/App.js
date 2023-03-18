import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" />   {/* ruta za shop */}
          <Route path="/cart" /> {/* ruta za korpu */}

        </Routes>
      </Router>


    </div>
  );
}

export default App;
