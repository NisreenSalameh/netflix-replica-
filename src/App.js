import './styles/App.css';
import Movies from './pages/Movies/Movies';
import Navbar from './components/common/Navbar/Navbar';


function App() {
  return (
    <div className='entry'>
      <Navbar />
      <Movies /> 
    </div>
  );
}

export default App;
