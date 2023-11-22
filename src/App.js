import './styles/App.css';
import Movies from './pages/Movies/Movies';
import Navbar from './components/common/Navbar/Navbar';
import Movie from './pages/Movie/Movie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 
  return (
    <div className='entry'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Movies />} path="/" />
          <Route element={<Movie />} path="/movie:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App