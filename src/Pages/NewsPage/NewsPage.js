import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './News.module.css';

import FilterBar from '../../Components/Layout/FilterBar';
import News from '../../Components/News/News';
import NewsFilters from './Components/NewsFilters/NewsFilters';

class NewsPage extends Component {
  render() {
    return (
      <div className={styles.newsComponent}>
        <div className={styles.filterContainer}>
          <FilterBar>
            <NewsFilters />
          </FilterBar>
        </div>
        <div className={styles.newsContainer}>
          <News />
          <News />
        </div>
      </div>
    );
  }
}

NewsPage.propTypes = {
}

export default NewsPage;
