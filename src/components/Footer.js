// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Mon Portfolio</p>
    </FooterContainer>
  );
};

export default Footer;

