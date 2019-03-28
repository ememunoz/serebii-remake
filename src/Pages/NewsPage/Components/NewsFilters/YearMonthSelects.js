import React from 'react';
import PropTypes from 'prop-types';

import Subheading from '../../../../Components/Typography/Subheading';

const YearMonthSelects = props => {
  return (
    <div>
      <Subheading>By year</Subheading>
      <select>
        <option>Please select...</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
      </select>

      <Subheading>By month</Subheading>
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
