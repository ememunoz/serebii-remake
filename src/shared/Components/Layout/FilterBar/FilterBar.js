import React from 'react';
import PropTypes from 'prop-types';
import classes from './FilterBar.module.css';

const FilterBar = ({children}) => {
  return (
    <div className={classes.filterBar}>
      <div className={classes.filterOptions}>
        {children}
      </div>
    </div>
  )
};

FilterBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default FilterBar;
