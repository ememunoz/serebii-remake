import React from 'react';
import PropTypes from 'prop-types';
import classes from './Subcategories.module.css';

import Checkbox from '../../../../../shared/Components/UI/Checkbox/Checkbox';
import InteractiveLink from '../../../../../shared/Components/Typography/InteractiveLink/InteractiveLink';
import Subheading from '../../../../../shared/Components/Typography/Subheading/Subheading';


const Subcategories = props => {
  return (
    <div className={classes.subcategories}>
      <Subheading theme='dark' className={classes.title}>Subcategories</Subheading>
      <ul className={classes.subcategoriesButtons}>
        <li><Checkbox>Pokémon Sun &amp; Moon</Checkbox></li>
        <li><Checkbox>Let's go Pikachu</Checkbox></li>
        <li><Checkbox>Pokémon Go</Checkbox></li>
      </ul>
      <InteractiveLink href={'/'}>[ + ] 90 more...</InteractiveLink>
    </div>
  )
};

Subcategories.propTypes = {
}

export default Subcategories;
