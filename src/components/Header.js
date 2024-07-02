// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Logo.png'; // Adjust the path to where your logo is located


const HeaderContainer = styled.header`
  background-color: rgba(236, 174, 200, 0.25);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px; // Adjust the height as needed
  margin-right: 1rem;
`;

// const Title = styled.h1`
//   margin: 0;
//   font-size: 1.5rem;
//   color: #5B001B;
// `;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="Amrutha Boutique Logo" />
        {/* <Title>Amrutha Boutique</Title> */}
      </LogoContainer>
      <Nav>
        <NavLink href="/">Home</NavLink>
        {/* <NavLink href="/products">Products</NavLink> */}
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
