import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Categories from '../../../../Components/UI/Categories/Categories';
import Subcategories from './Subcategories';
import YearMonthSelects from './YearMonthSelects';

const NewsFiltersWrapper = styled.div`
  font-size: 1.6rem;
  &>*:not(:last-child) {
    margin-bottom: 6.4rem;
  }
`;

const NewsFilters = props => {
  return (
    <NewsFiltersWrapper>
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
    </NewsFiltersWrapper>
  )
};

NewsFilters.propTypes = {
}

export default NewsFilters;
