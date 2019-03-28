import React from 'react';
import PropTypes from 'prop-types';
import classes from './Pokedex.module.css';
import FilterBar from '../../Components/Layout/FilterBar';
import PokedexTable from './PokedexTable/PokedexTable';
import PokedexFilters from './PokedexFilters/PokedexFilters';

const pokemonList = [
  { id: 0, img: "Task 1", name: 20 },
  { id: 1, img: "Task 2", name: 40 },
  { id: 2, img: "Task 3", name: 60 }
]

const Pokedex = props => {
  return (
    <div className={classes.pokedex}>
      <div className={classes.filterContainer}>
        <FilterBar>
          <PokedexFilters />
        </FilterBar>
      </div>

      <div className={classes.pokedexContainer}>
        <p>Generation jump</p>
        <PokedexTable
          pokemonList={pokemonList}
        />
      </div>
    </div>
  )
};

Pokedex.propTypes = {
}

export default Pokedex;
