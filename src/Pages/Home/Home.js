import React from 'react';
import './Home.css';

import News from '../../Components/News/News';
import SecondaryNews from './SecondaryNews/SecondaryNews';
import WeeklyUpdates from './WeeklyUpdates/WeeklyUpdates';

import mainNewsSource from '../../assets/legendary-palkia.jpg';


const mainNews = {
  id: 1,
  imgSrc: mainNewsSource,
  subtitle: 'JANUARY 29TH | POKEMON GO',
  summary: 'As the Hoenn event has ended, Palkia has now become the Level 5 Raid Boss and thus is now available in the game. A new patch is rolling out for Pokémon GO. This patch brings the game up to Version 1.101 and adds various new features.\nThis runs until February 28th 2019. However, with this, the other Raid Bosses are also set to change so keep checking back as we add them to our Raid Battles section.',
  title: 'Palkia + New Update',
}


const Home = props => {

  return (
    <div className='homeLayout'>
      <div className='mainNewsPos'>
        <News {...mainNews} />
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
