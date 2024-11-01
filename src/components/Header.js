// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const NavMenu = styled.nav`
  display: flex;
`;

const NavItem = styled(NavLink)`
  margin-left: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.primaryText};
  text-decoration: none;
  font-size: 1rem;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.colors.accentPink};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accentPurple};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Mon Portfolio</Logo>
      <NavMenu>
        <NavItem exact to="/">Accueil</NavItem>
        <NavItem to="/about">À Propos</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
