// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #ECAEC8;
  padding: 1rem;
  text-align: center;
  color: #000;
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Amrutha Boutique. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
