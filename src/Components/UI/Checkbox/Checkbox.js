import React from 'react';
import PropTypes from 'prop-types';
import classes from './Checkbox.module.css';

const Checkbox = ({ checked, children }) => {
  return (
    <label className={classes.checkbox}>
      <input type='checkbox' />
      <span className={classes.checkmark}></span>
      {children}
    </label>
  )
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool
}

export default Checkbox;
