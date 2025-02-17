import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateToken from './pages/CreateToken';
import Confirmation from './pages/Confirmation';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-token" element={<CreateToken />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;