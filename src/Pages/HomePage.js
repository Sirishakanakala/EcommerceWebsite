// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList';
import Carousel from '../components/Carousel';
// import LatestCollection from '../components/CarouselProducts';
import MomandDaughter from '../components/Momanddaughter';
// import SisterandBrother from '../components/SisterBroCombo';
 import bg from '../assets/products/bg.png';

 const Title2 = styled.h1`
 margin: 0;
 font-size: 1.5rem;
 color: #5B001B;
 text-align: center;
`;


 const Welcome = styled.header`
  background-color: rgba(236, 174, 200, 0.25);
  background-image: url(${bg}); /* Use url() to reference the imported image */
  background-size: cover; /* Optional: Adjust to fit your design needs */
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

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
      
      <Welcome>
        <Title2>Welcome to <br/>Amrutha Boutique</Title2>
      </Welcome>
      <Section>
        {/* <Title>Latest Collection</Title>
        <LatestCollection /> */}
        <Title>Kids</Title>
        <ProductList />
        <Title>Mom and Daughter Combos</Title>
        <MomandDaughter />
       
      </Section>
      <Section>
        <Title>Customer Reviews</Title>
        <Carousel />
      </Section>
    </>
  );
}

export default HomePage;


