import './App.css';
import Movies from './components/Pages/Movies/Movies';
import Navbar from './components/Resusable/navbar/Navbar';


function App() {
  return (
    <div className='entry'>
      <Navbar />
      <Movies /> 
    </div>
  );
}

export default App;
