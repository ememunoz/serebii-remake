import React from 'react';
import PropTypes from 'prop-types';
import classes from './NewsFilters.module.css';

import Categories from '../../../../Components/UI/Categories/Categories';
import Subcategories from './Subcategories/Subcategories';
import YearMonthSelects from './YearMonthSelects/YearMonthSelects';

const NewsFilters = props => {
  return (
    <div className={classes.newsFilters}>
      <Categories
        items={[
          { id: 'all', name: 'All' },
          { id: 'games', name: 'Games' },
          { id: 'anime', name: 'Anime' },
          { id: 'manga', name: 'Manga' },
          { id: 'media', name: 'Media' },
        ]}
        activeItemId='all'
        onClickItem={() => { }}
      />
      <Subcategories />
      <YearMonthSelects />
    </div>
  )
};

NewsFilters.propTypes = {
}

export default NewsFilters;
