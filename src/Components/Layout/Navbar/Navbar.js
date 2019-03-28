import React from 'react';
import styled from 'styled-components';

import NavItems from './NavItems/NavItems';
import Container from '../Container';
import Logo from './NavItems/Logo';

const NavbarWrapper = styled.div`
  background-color: ${props => props.theme.primaryColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  color: white;
`;

const NavbarLayout = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
`;

const Navbar = props => {
  return (
    <NavbarWrapper>
      <Container style={{ backgroundColor: 'transparent' }}>
        <NavbarLayout>
          <Logo />
          <NavItems />
        </NavbarLayout>
      </Container>
    </NavbarWrapper >
  );
}

export default Navbar;