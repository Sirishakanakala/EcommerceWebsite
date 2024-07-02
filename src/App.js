import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProductDetails from './Pages/ProductDetails';
import './App.css';
import styled from 'styled-components';
import bg from './assets/products/bg.png';

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: #5B001B;
  text-align: center;
`;

// Adjusted background-image style to use the imported image correctly
const HeaderContainer = styled.header`
  background-color: rgba(236, 174, 200, 0.25);
  background-image: url(${bg}); /* Use url() to reference the imported image */
  background-size: cover; /* Optional: Adjust to fit your design needs */
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

function App() {
  return (
    <Router>
      <Header />
      <HeaderContainer>
       <Title>Welcome to Amrutha Boutique</Title>
      </HeaderContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
