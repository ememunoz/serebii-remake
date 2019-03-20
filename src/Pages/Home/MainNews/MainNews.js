import React from 'react';
import mainNewsSource from '../../../assets/legendary-palkia.jpg'
import './MainNews.css';

import BodyText from '../../../Components/Typography/BodyText/BodyText';
import Heading from '../../../Components/Typography/Heading/Heading';
import InteractiveLink from '../../../Components/Typography/InteractiveLink/InteractiveLink';

const MainNews = props => {
  return (
    <div className='MainNews'>
      <img className='MainNewsImage' src={mainNewsSource}/>
      <Heading type='h2'>Palkia + update</Heading>
      <p className='details'>JANUARY 29TH | POKEMON GO</p>
      <BodyText>
        As the Hoenn event has ended, Palkia has now become the Level 5 Raid Boss and thus is now available in the game. A new patch is rolling out for Pokémon GO. This patch brings the game up to Version 1.101 and adds various new features.
      </BodyText>
      <BodyText>
        This runs until February 28th 2019. However, with this, the other Raid Bosses are also set to change so keep checking back as we add them to our Raid Battles section.
      </BodyText>
      <InteractiveLink href='#'>Continue reading...</InteractiveLink>
    </div>
  )
}

export default MainNews;
