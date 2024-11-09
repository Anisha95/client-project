import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Listing from './pages/Listing/Listing';
import Footer from './components/Footer/Footer';

function App() {
    return(<Router>
    <div className="app">
     <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Listing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>)
}

export default App;
