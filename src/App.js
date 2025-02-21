import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProductDetails from './Pages/ProductDetails';
import './App.css';
import  MDdetails from './Pages/MDdetails';




function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="mdproduct/:id" element={<MDdetails/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
