import React from 'react';
import './WeeklyUpdates.css';
import Update from './Update/Update';

import weeklySource from '../../../assets/week-poke.jpg';
import animeSource from '../../../assets/week-anime.jpg';

const WeeklyUpdates = props => {
  return (
    <div className='weeklyUpdates'>
      <Update src={weeklySource} title='Pokemon of the week' category='games'/>
      <Update src={animeSource} title='Next in US and Japan' category='anime'/>
    </div>
  )
}

export default WeeklyUpdates;
