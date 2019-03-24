import React from 'react';
import PropTypes from 'prop-types';
import classes from './YearMonthSelects.module.css';

import Subheading from '../../../../../shared/Components/Typography/Subheading/Subheading';

const YearMonthSelects = props => {
  return (
    <div className={classes.yearMonthSelects}>
      <Subheading theme='dark'>By year</Subheading>
      <select>
        <option>Please select...</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
      </select>

      <Subheading theme='dark'>By month</Subheading>
      <select>
        <option>Please select...</option>
        <option>March</option>
        <option>February</option>
        <option>January</option>
      </select>
    </div>
  )
};

YearMonthSelects.propTypes = {
}

export default YearMonthSelects;
