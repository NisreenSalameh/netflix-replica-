import './styles/apps.css';
import Home from './pages/Home';
import NetFlixShow from './pages/NetFlixShow';
import Movies from './pages/Movies/Movies';
import Navbar from './components/common/Navbar/Navbar';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='entry'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Movies />} path="/" />
          <Route element={<MovieDetails />} path="/movie/:id" />
          <Route path="/home" element={<Home />} /> 
          <Route path="/netflix-show" element={<NetFlixShow/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;