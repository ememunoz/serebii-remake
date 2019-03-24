import React from 'react';
import PropTypes from 'prop-types';
import classes from './Checkbox.module.css';

const Checkbox = props => {
  return (
    <label className={classes.checkbox}>
      <input type='checkbox' />
      <span className={classes.checkmark}></span>
      One
    </label>
  )
};

Checkbox.propTypes = {
}

export default Checkbox;
