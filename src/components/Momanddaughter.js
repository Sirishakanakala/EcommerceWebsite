// src/components/ProductList.js
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Search from './Search';
import products from '../components/Allproducts';


const ProductListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 1rem;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const ProductCardWrapper = styled.div`
  flex: 0 0 auto;
  width: 200px; /* Fixed width for all cards */
  height: 300px; /* Fixed height for all cards */
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const LeftScrollButton = styled(ScrollButton)`
  left: 0;
`;

const RightScrollButton = styled(ScrollButton)`
  right: 0;
`;

const ScrollContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

function  MotherandDaughter() {
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  const filteredProducts = products.filter(product =>
    product.orderCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollContainer>
        <LeftScrollButton onClick={scrollLeft}>{'<'}</LeftScrollButton>
        <ProductListContainer ref={containerRef}>
          {filteredProducts.map(product => (
            <ProductCardWrapper key={product.id}>
              <ProductCard product={product} />
            </ProductCardWrapper>
          ))}
        </ProductListContainer>
        <RightScrollButton onClick={scrollRight}>{'>'}</RightScrollButton>
      </ScrollContainer>
    </>
  );
}

export default MotherandDaughter;
