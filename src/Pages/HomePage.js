// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList';
import Carousel from '../components/Carousel';
// import LatestCollection from '../components/CarouselProducts';
import MomandDaughter from '../components/Momanddaughter';
import SisterandBrother from '../components/SisterBroCombo';
// import bg from '../assets/products/Header.png';


// const Header = styled.header`
//   height: 300px; /* Adjust height as needed */
//   width: 100%; /* Adjust width as needed */
//   background-image: url(${bg});
//   background-size: cover;
//   background-position: center;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #7D2A36; /* Text color on top of the image */
//   font-size: 1rem;
//   font-family: 'Daydream', cursive; /* Apply Daydream font */
// `;

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

function HomePage() {
  return (
    <>
      
     
      <Section>
        {/* <Title>Latest Collection</Title>
        <LatestCollection /> */}
        <Title>Kids</Title>
        <ProductList />
        <Title>Mom and Daughter Combos</Title>
        <MomandDaughter />
        <Title>Brother and Sister Combos</Title>
        <SisterandBrother />
      </Section>
      <Section>
        <Title>Customer Reviews</Title>
        <Carousel />
      </Section>
    </>
  );
}

export default HomePage;


