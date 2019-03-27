import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './PokedexTable.module.css';

import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'No.', width: 40, sortable: true },
  { key: 'img', name: 'Pic' },
  { key: 'name', name: 'Name', sortable: true },
  { key: 'type', name: 'Type', width: 60 },
  { key: 'stat_hp', name: 'HP', width: 40, sortable: true },
  { key: 'stat_att', name: 'Att', width: 40, sortable: true },
  { key: 'stat_def', name: 'Def', width: 40, sortable: true },
  { key: 'stat_satt', name: 'S.Att', width: 40, sortable: true },
  { key: 'stat_sdef', name: 'S.Def', width: 40, sortable: true },
  { key: 'stat_spd', name: 'Spd', width: 40, sortable: true },
];

const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {
    if (sortDirection === 'ASC') {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === 'DESC') {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  };
  return sortDirection === 'NONE' ? initialRows : [...rows].sort(comparer);
};

// const RowRenderer = ({ row, idx }) => {
//   const { firstName, lastName } = row;
//   return (
//     <Panel title={`${firstName} ${lastName}`}>
//       <img src={row.avatar} className="pull-left" />
//       <Contact {...row} />
//     </Panel>
//   );
// };

const PokedexTable = ({ pokemonList }) => {
  const [rows, setRows] = useState(pokemonList);
  return (
    <div className={classes.pokedexTable}>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={3}
        //onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect
        onGridSort={(sortColumn, sortDirection) =>
          setRows(sortRows(pokemonList, sortColumn, sortDirection))
        }
      />
    </div>
  )
};

PokedexTable.propTypes = {
}

export default PokedexTable;
