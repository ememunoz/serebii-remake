import React from 'react';
import PropTypes from 'prop-types';
import classes from './EggGroupSelect.module.css';

import Subheading from '../../../../Components/Typography/Subheading';

const EggGroupSelect = props => {
  return (
    <div className={classes.typeSelect}>
      <Subheading>By Egg Group</Subheading>
    </div>
  )
};

EggGroupSelect.propTypes = {
}

export default EggGroupSelect;
