import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './News.module.css';

import FilterBar from '../../Components/Layout/FilterBar/FilterBar';
import New from '../../Components/New/New';
import NewsFilters from './Components/NewsFilters/NewsFilters';

class News extends Component {
  render() {
    return (
      <div className={styles.newsComponent}>
        <div className={styles.filterContainer}>
          <FilterBar>
            <NewsFilters />
          </FilterBar>
        </div>
        <div className={styles.newsContainer}>
          <New />
          <New />
        </div>
      </div>
    );
  }
}

News.propTypes = {
}

export default News;
