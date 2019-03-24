import React from 'react';
import PropTypes from 'prop-types';
import classes from './Subheading.module.css';

const Subheading = ({ children, className }) => 
  <p className={`${classes.subheading} ${className ? className : ''}`}>{children}</p>;

Subheading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Subheading;
