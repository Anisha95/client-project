import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Listing from './pages/Listing/Listing';
import Footer from './components/Footer/Footer';

function App() {
    return(<Router>
     <Header />
        <Routes>
          <Route path="/" element={<Listing />} />
        </Routes>
      <Footer />
  </Router>)
}

export default App;
