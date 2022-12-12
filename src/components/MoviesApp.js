import '../App.css';
import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
//import Home from './components/Home';
import OpenMovie from './OpenMovie';
import { MovieNavbar } from './MovieNavbar';
import Gamosacdel from './Gamosacdel';
import UpCommingMovie from './UpCommingMovie';
import TopRated from './TopRated';
function MoviesApp() {
  
  return (
    <div className="App">
      
        <Router>
       {/*<MovieNavbar/>*/}
          <Routes>
          <Route path="/" element={<Gamosacdel/>}/>
          <Route path='/openMovie/:id' element={<OpenMovie/>}/>
          <Route path='/UpcommingMovies' element={<UpCommingMovie/>}/>
          <Route path='/TopRatedMovies' element={<TopRated/>}/>
        </Routes>
        </Router>
    
    </div>
  );
}

export default MoviesApp;