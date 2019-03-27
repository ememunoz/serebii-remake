import React from 'react';
import './NavItem.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = props => {
  const active = !!props.active ? 'active' : '';
  return (
  <li className={'navItem'}>
    <NavLink className={`navItemLink ${active}`} to={props.href}>{props.children}</NavLink>
  </li>
)
};

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default NavItem;