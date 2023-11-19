// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NetFlixShow from './pages/NetFlixShow';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/netflix-show" element={<NetFlixShow />} /> 
        {/* kenet hatit browserRRounter a parent class bas aloule ma fik w bbedak thot Route be2alb parent esma Routes */}
      </Routes>
    </Router>
  );
}

export default App;
