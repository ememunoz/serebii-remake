import React from 'react';
import PropTypes from 'prop-types';
import classes from './NewsFilters.module.css';

import Subheading from '../../../../shared/Components/Typography/Subheading/Subheading';
import Categories from './Categories/Categories';
import Subcategories from './Subcategories/Subcategories';
import YearMonthSelects from './YearMonthSelects/YearMonthSelects';

const NewsFilters = props => {
  return (
    <div className={classes.newsFilters}>
      
      <Categories/>

      <Subcategories/>

      <YearMonthSelects/>
    </div>
  )
};

NewsFilters.propTypes = {
}

export default NewsFilters;
