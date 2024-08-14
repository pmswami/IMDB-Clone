import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routhPath } from './constants/route';
import CategoryMovies from './pages/CategoryMovies';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path={ routhPath.home } element={ <Home /> } />
          <Route path={ routhPath.categories } element={ <CategoryMovies /> } />
          <Route path={ routhPath.invalid } element={ <Home /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
