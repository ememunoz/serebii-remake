import React from 'react';
import './SecondaryNews.css';
import Secondary from './Secondary/Secondary';

import newsTwoSrc from '../../../assets/news-2.jpg';
import newsThreeSrc from '../../../assets/news-3.png';

const SecondaryNews = props => {
  return (
    <div className='secondaryNews'>
      <Secondary
        src={newsTwoSrc}
        title={'Let\'s Go Pikachu & Eevee! Patch'}
        category={'January 29th | Pokemon GO'}
        body={'Following its reveal last month, the first patch is now available for'}
      />
      <Secondary
        src={newsThreeSrc}
        title={'New Spot detective Pikachu'}
        category={'January 29th | Media'}
        body={'Following its reveal last month, the first patch is now available for Pokémon Let\'s Go, Pikachu! & Pokémon, Let\'s Go, Eevee!'}
      />
      <Secondary
        src={newsTwoSrc}
        title={'Let\'s Go Pikachu & Eevee! Patch'}
        category={'January 29th | Pokemon GO'}
        body={'Following its reveal last month, the first patch is now available for Pokémon Let\'s Go, Pikachu! & Pokémon, Let\'s Go, Eevee!'}
      />
    </div>
  )
}

export default SecondaryNews;
