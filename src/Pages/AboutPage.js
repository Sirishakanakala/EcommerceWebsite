// src/pages/AboutPage.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

function AboutPage() {
  return (
    <AboutContainer>
      <Title>About Amrutha Boutique</Title>
      <Content>
        Our boutique is located in Madhapur. We have been running this boutique for over 10 years, with 500+ happy customers through online orders in just 1.5 months.
      </Content>
      <Content>
        We have many positive reviews from our satisfied customers. Visit us to experience the best in kids lehangas, kids frocks, mom and daughter combos, sarees, half sarees, and much more.
      </Content>
    </AboutContainer>
  );
}

export default AboutPage;
