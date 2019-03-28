import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavItem from './NavItem/NavItem';
import SearchIcon from '../../../Icons/SearchIcon';

const NavItemsWrapper = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  
  &>li:not(:last-child) {
    margin-right: 4rem;
  }

  &>li:last-child {
    height: 1.6rem;
  }

  &>li {
    height: 100%;
  }
`;

const NavItems = props => (
  <NavItemsWrapper>
    <NavItem href='/news'>News</NavItem>
    <NavItem href='/games'>Games</NavItem>
    <NavItem href='/media'>Media</NavItem>
    <NavItem href='/pokedex'>Pokédex</NavItem>
    <NavItem href='/forums'>Forums</NavItem>
    <NavItem href='#'><SearchIcon /></NavItem>
  </NavItemsWrapper>
);

NavItems.propTypes = {
}

export default NavItems;