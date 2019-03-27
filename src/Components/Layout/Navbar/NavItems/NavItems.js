import React from 'react';
import styles from './NavItems.module.css';
import PropTypes from 'prop-types';

const NavItems = props => (
  <ul className={styles.navItems}>
    {props.children}
  </ul>
);

NavItems.propTypes = {
  children: PropTypes.node.isRequired
}

export default NavItems;