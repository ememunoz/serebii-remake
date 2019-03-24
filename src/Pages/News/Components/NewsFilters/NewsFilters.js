import React from 'react';
import PropTypes from 'prop-types';
import classes from './NewsFilters.module.css';

import InteractiveLink from '../../../../Components/Typography/InteractiveLink/InteractiveLink';

const NewsFilters = props => {
  return (
    <div className={classes.newsFilters}>
      <ul>
        <li>All</li>
        <li>Games</li>
        <li>Anime</li>
        <li>Manga</li>
        <li>Media</li>
      </ul>

      <h4>Subcategories</h4>
      <ul>
        <li>Pokémon Sun &amp; Moon</li>
        <li>Let's go Pikachu</li>
        <li>Pokémon Go</li>
      </ul>
      <InteractiveLink href={'/'}>[ + ] 90 more...</InteractiveLink>

      <h4>By year</h4>
      <select>
        <option>Please select...</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
      </select>

      <h4>By month</h4>
      <select>
        <option>Please select...</option>
        <option>March</option>
        <option>February</option>
        <option>January</option>
      </select>
    </div>
  )
};

NewsFilters.propTypes = {
}

export default NewsFilters;
