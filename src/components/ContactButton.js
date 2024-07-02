// src/components/ContactButton.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.buttonBackground};
  color: ${props => props.theme.colors.buttonText};
  padding: 1rem 2rem;
  margin: 2rem auto;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
`;

function ContactButton() {
  return (
    <Button href="https://wa.me/9550418340" target="_blank" rel="noopener noreferrer">
      Order Now via WhatsApp
    </Button>
  );
}

export default ContactButton;
