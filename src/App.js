import './styles/App.css';
import Movies from './pages/Movies/Movies';
import Navbar from './components/common/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';


function App() {
 
  return (
    <div className='entry'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Movies />} path="/" />
          <Route element={<MovieDetails />} path="/movie/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App