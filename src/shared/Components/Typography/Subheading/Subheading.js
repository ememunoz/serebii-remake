import React from 'react';
import PropTypes from 'prop-types';
import classes from './Subheading.module.css';

const Subheading = ({ children, className, theme }) =>
  <p className={`${classes.subheading} ${theme === 'dark' ? classes.dark : classes.light} ${className ? className : ''}`}>{children}</p>;

Subheading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light'])
}

export default Subheading;
