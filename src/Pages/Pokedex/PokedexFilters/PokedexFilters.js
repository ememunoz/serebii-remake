import React from 'react';
import PropTypes from 'prop-types';
import classes from './PokedexFilters.module.css';

import Categories from '../../../Components/UI/Categories/Categories';
import EggGroupSelect from './EggGroupSelect/EggGroupSelect';
import TypesSelect from './TypesSelect/TypesSelect';

const PokedexFilters = props => {
  return (
    <div className={classes.pokedexFilters}>
      <Categories
        items={[
          { id: 'gen7', name: 'VII: Sun & Moon/US/UM' },
          { id: 'gen6', name: 'VI: X/Y/OR/AS' },
          { id: 'gen5', name: 'V: Black/White/B2/W2' },
          { id: 'gen4', name: 'IV: Diamond/Pearl/Platinum/HG/SS' },
          { id: 'gen3', name: 'III: Ruby/Saphire/Emerald/FR/GL' },
          { id: 'gen2', name: 'II: Gold/Silver/Crystal' },
          { id: 'gen1', name: 'I: Red/Blue/Green/Yellow' },
        ]}
        activeItemId='gen7'
        onClickItem={() => { }}
      />
      <TypesSelect />
      <EggGroupSelect />
    </div>
  )
};

PokedexFilters.propTypes = {
}

export default PokedexFilters;
