import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DribbbleIcon from '../../Icons/DribbbleIcon';
import ExternalLink from '../../UI/ExternalLink';
import FacebookIcon from '../../Icons/FacebookIcon';
import InstagramIcon from '../../Icons/InstagramIcon';
import TwitterIcon from '../../Icons/TwitterIcon';

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 2rem;

  &>li {
    height: 100%;
  }

  &>li:not(:last-child){
    margin-right: 1.6rem;
  }
`;

const SocialMediaButton = ({ children, href }) => (
  <li><ExternalLink href={href}>{children}</ExternalLink></li>
)

const SocialMediaButtons = props => {
  return (
    <Wrapper>
      <SocialMediaButton href='https://www.facebook.com/'>
        <FacebookIcon />
      </SocialMediaButton>
      <SocialMediaButton href='https://www.twitter.com/'>
        <TwitterIcon />
      </SocialMediaButton>
      <SocialMediaButton href='https://www.instagram.com/'>
        <InstagramIcon />
      </SocialMediaButton>
      <SocialMediaButton href='https://dribbble.com/marcomunooz'>
        <DribbbleIcon />
      </SocialMediaButton>
    </Wrapper>
  )
};

SocialMediaButtons.propTypes = {
}

export default SocialMediaButtons;
