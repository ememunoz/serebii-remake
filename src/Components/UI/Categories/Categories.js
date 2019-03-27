import React from 'react';
import PropTypes from 'prop-types';
import classes from './Categories.module.css';

const Categories = ({ activeItemId, items }) => {
  return (
    <ul className={classes.categories}>
      {items.map(item => (
        <li key={item.id} className={activeItemId === item.id ? classes.active : null}>{item.name}</li>
      ))}
    </ul>
  )
};

Categories.propTypes = {
  activeItemId: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}

export default Categories;
