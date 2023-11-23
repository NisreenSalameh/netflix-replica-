import './styles/Apps.css';
import Home from './pages/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scarface from './pages/Scarface/Scarface';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='entry'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route element={<Movies />} path="/movies" />
          <Route element={<MovieDetails />} path="/movie/:id" />
          <Route element={<Scarface/>} path='/scarface'></Route>
        </Routes>
      </BrowserRouter>
        <Footer/>
      </div>
  );
}

export default App;