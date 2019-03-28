import React from 'react';
import PropTypes from 'prop-types';
import classes from './Subcategories.module.css';

import Checkbox from '../../../../../Components/UI/Checkbox/Checkbox';
import LinkButton from '../../../../../Components/UI/Buttons/LinkButton';
import Subheading from '../../../../../Components/Typography/Subheading';


const Subcategories = props => {
  return (
    <div className={classes.subcategories}>
      <Subheading className={classes.title}>Subcategories</Subheading>
      <ul className={classes.subcategoriesButtons}>
        <li><Checkbox>Pokémon Sun &amp; Moon</Checkbox></li>
        <li><Checkbox>Let's go Pikachu</Checkbox></li>
        <li><Checkbox>Pokémon Go</Checkbox></li>
      </ul>
      <LinkButton>[ + ] 90 more...</LinkButton>
    </div>
  )
};

Subcategories.propTypes = {
}

export default Subcategories;
