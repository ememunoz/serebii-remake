import React from 'react';
import PropTypes from 'prop-types';
import styles from './New.module.css';
import mainNewsSource from '../../assets/legendary-palkia.jpg';

import { Heading3 } from '../Typography/Headings';
import Subheading from '../Typography/Subheading';
import BodyText from '../Typography/BodyText';
import InteractiveLink from '../Typography/InteractiveLink/InteractiveLink';

const New = props => {
  return (
    <div className={styles.new}>
      <img className={styles.newImage} src={mainNewsSource} />
      <Heading3>Palkia + New Update</Heading3>
      <Subheading>JANUARY 29TH | POKEMON GO</Subheading>
      <BodyText>
        As the Hoenn event has ended, Palkia has now become the Level 5 Raid Boss and thus is now available in the game. A new patch is rolling out for Pokémon GO. This patch brings the game up to Version 1.101 and adds various new features.
      </BodyText>
      <BodyText>
        This runs until February 28th 2019. However, with this, the other Raid Bosses are also set to change so keep checking back as we add them to our Raid Battles section.
      </BodyText>
      <InteractiveLink href={'/'}>Continue reading...</InteractiveLink>
    </div>
  )
};

New.propTypes = {
}

export default New;
