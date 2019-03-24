import React from 'react';
import styles from './Footer.module.css';

import BodyText from '../../Typography/BodyText/BodyText';
import Container from '../Container/Container';
import DribbbleIcon from '../../Icons/DribbleIcon';
import FacebookIcon from '../../Icons/FacebookIcon';
import InstagramIcon from '../../Icons/InstagramIcon';
import InteractiveLink from '../../Typography/InteractiveLink/InteractiveLink';
import TwitterIcon from '../../Icons/TwitterIcon';

const Footer = () => {
  return (
    <div className={styles.background}>
      <Container style={{ backgroundColor: 'transparent' }}>
        <div className={styles.footer}>
          <div className={styles.text}>
            <BodyText>&copy; Designed by&nbsp;</BodyText>
            <InteractiveLink
              href='https://dribbble.com/marcomunooz'
              newTab
              type='white'
            >
              Marco Muñoz
          </InteractiveLink>
          </div>
          <ul className={styles.socialMedia}>
            <li><InteractiveLink type='white' newTab href='https://www.facebook.com/'>
              <FacebookIcon className={styles.socialMediaIcon} />
            </InteractiveLink></li>
            <li><InteractiveLink type='white' newTab href='https://www.twitter.com/'>
              <TwitterIcon className={styles.socialMediaIcon} />
            </InteractiveLink></li>
            <li><InteractiveLink type='white' newTab href='https://www.instagram.com/'>
              <InstagramIcon className={styles.socialMediaIcon} />
            </InteractiveLink></li>
            <li><InteractiveLink type='white' newTab href='https://dribbble.com/marcomunooz'>
              <DribbbleIcon className={styles.socialMediaIcon} />
            </InteractiveLink></li>
          </ul>

        </div>

      </Container>
    </div>
  )
};

export default Footer;
