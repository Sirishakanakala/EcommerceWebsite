// src/pages/ContactPage.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
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

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: #ECAEC8;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
`;

function ContactPage() {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Content>Phone: 9550418340</Content>
      <LinkButton href="https://wa.me/9550418340" target="_blank" rel="noopener noreferrer">
        Contact via WhatsApp
      </LinkButton>
      <LinkButton href="link_to_your_group" target="_blank" rel="noopener noreferrer">
        Join Our Group
      </LinkButton>
    </ContactContainer>
  );
}

export default ContactPage;
