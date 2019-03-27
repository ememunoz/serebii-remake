import React from 'react';
import PropTypes from 'prop-types';
import classes from './TypesSelect.module.css';

import Subheading from '../../../../Components/Typography/Subheading';

const TypesSelect = props => {
  return (
    <div className={classes.typesSelect}>
      <Subheading>Type</Subheading>
    </div>
  )
};

TypesSelect.propTypes = {
}

export default TypesSelect;
