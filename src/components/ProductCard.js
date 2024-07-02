

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  width: 250px; /* Set a fixed width */
  height: 280px; /* Set a fixed height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${({ available }) => (available ? '#fff' : '#f8d7da')}; /* Change background color if not available */
  border-radius: 20px; /* Add rounded corners */
`;

const Image = styled.img`
  width: 100%;
  height: 100%; /* Adjust height to fit within the card */
  object-fit: cover;
  border-radius: 20px 20px 0 0; /* Rounded top corners to match card */
`;

const Name = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem; /* Increased font size */
  margin: 0.2rem 0; /* Added margin for spacing */
  text-align: center;
  color: #333; /* Darker color for better readability */
`;

const Description = styled.p`
  font-size: 0.8rem; /* Adjusted font size */
  margin: 0.2rem 0; /* Added margin for spacing */
  text-align: center;
  color: #555; /* Softer color for description */
`;

const Availability = styled.button`
  font-size: 0.7rem;
  color: #fff;
  background-color: ${({ available }) => (available ? 'white' : 'red')}; /* Green for available, red for not available */
  border: none;
  border-radius: 5px;
  padding: 0.3rem 0.6rem; /* Adjusted padding */
  cursor: default;
  margin-top: 0.2rem; /* Added margin-top for spacing */
`;

const ProductCard = ({ product }) => {
  return (
    <Card available={product.available}>
      <Link to={`/product/${product.id}`}>
        <Image src={product.image} alt={product.name} />
      </Link>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <Availability available={product.available}>
        {product.available ? '' : 'Out of Stock'}
      </Availability>
    </Card>
  );
};

export default ProductCard;
