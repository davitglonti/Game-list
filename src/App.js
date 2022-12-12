import './App.css';
import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
//import Home from './components/Home';
import Games from './Games';
import Navbar from './components/Navbar';
import GameInfo from './components/GameInfo';
function App() {
  
  return (
    <div className="App">
      
        <Router>
        <Navbar/>
          <Routes>
          <Route path="/" element={<Games/>}/>
          <Route path='/gameInfo/:id' element={<GameInfo/>}/>
        </Routes>
        </Router>
    
    </div>
  );
}

export default App;
