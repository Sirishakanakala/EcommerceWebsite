// src/components/Search.js
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  text-align: center;
  margin: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 200px;
  border-radius: 4px;
  border: 1px solid #ffe6e6;
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ECAEC8;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Search({ searchQuery, setSearchQuery }) {
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search by Order Code"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={() => setSearchQuery('')}>Clear</Button>
    </SearchContainer>
  );
}

export default Search;
