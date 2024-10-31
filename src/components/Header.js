// src/components/Header.js

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Mon Portfolio</h1>
    </HeaderContainer>
  );
};

export default Header;
