import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './News.module.css';

import FilterBar from '../../Layout/FilterBar/FilterBar';
import New from '../../Components/New/New';
import NewsFilters from './Components/NewsFilters/NewsFilters';

class News extends Component {
  render() {
    return (
      <div className={styles.newsContainer}>
        <FilterBar>
          <NewsFilters />
        </FilterBar>
        <div className={styles.newss}>
          <New/>
          <New/>
        </div>
      </div>
    );
  }
}

News.propTypes = {
}

export default News;
