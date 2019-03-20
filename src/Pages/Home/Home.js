import React from 'react';
import './Home.css';

import MainNews from './MainNews/MainNews';
import SecondaryNews from './SecondaryNews/SecondaryNews';
import WeeklyUpdates from './WeeklyUpdates/WeeklyUpdates';

const Home = props => {

  return (
    <div className='homeLayout'>
      <div className='mainNewsPos'>
        <MainNews />
      </div>
      <div className='secondaryNewsPos'>
        <SecondaryNews />
      </div>
      <div className='weeklyUpdatesPos'>
        <WeeklyUpdates />
      </div>
    </div>
  )
}

export default Home;
