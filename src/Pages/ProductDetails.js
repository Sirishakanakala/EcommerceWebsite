import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import products from '../data/Allproducts';


const ProductDetailsContainer = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  position: justify-center;
`;

const OrderButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #25D366;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    background-color: #1DA851;
  }
`;

// const DownloadLink = styled.a`
//   display: block;
//   margin-top: 1rem;
//   color: #0000EE;
//   text-decoration: underline;
//   cursor: pointer;
// `;

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  const whatsappMessage = `https://wa.me/9550418340?text=I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(product.name)}.%20Please%20find%20the%20image%20attached.%20`;

  return (
    <>
      <ProductDetailsContainer>
      <Title>{product.name}</Title>
      <ProductImage src={product.image} alt={product.name} />
      <Description>{product.description}</Description>
      <Description>{product.details}</Description>
      <OrderButton href={whatsappMessage} target="_blank" rel="noopener noreferrer">
        Order Now via WhatsApp
      </OrderButton>
      {/* <DownloadLink href={product.image} download>
        Download Image
      </DownloadLink> */}
      <p>To order,  take screenshot and send it to our WhatsApp number: 9550418340</p>
    </ProductDetailsContainer>
    </>
  );
}

export default ProductDetails;
