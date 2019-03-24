import React from 'react';
import PropTypes from 'prop-types';
import classes from './Categories.module.css';

const Categories = props => {
  return (
    <ul className={classes.categories}>
        <li className={classes.active}>All</li>
        <li>Games</li>
        <li>Anime</li>
        <li>Manga</li>
        <li>Media</li>
      </ul>
  )
};

Categories.propTypes = {
}

export default Categories;
