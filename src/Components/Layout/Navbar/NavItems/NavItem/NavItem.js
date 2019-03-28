import React from 'react';
import classes from './NavItem.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ active, children, href }) => {
  const _active = !!active ? 'active' : '';
  return (
    <li>
      <NavLink className={`${classes.navItemLink} ${_active}`} to={href}>{children}</NavLink>
    </li>
  )
};

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default NavItem;