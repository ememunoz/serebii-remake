import React from 'react';
import styled from 'styled-components';

import BodyText from '../../Typography/BodyText';
import Container from '../Container';
import SocialMediaButtons from './SocialMediaButtons';
import ExternalLink from '../../UI/ExternalLink';

const FooterWrapper = styled.footer`
  background-color: #66AA72;
  position: relative;
  z-index: 100;
  color: white;
`;

const FooterLayout = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WhiteText = styled.span`
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container style={{ backgroundColor: 'transparent' }}>
        <FooterLayout>
          <BodyText>
            &copy; Designed and coded by&nbsp;
            <WhiteText>
              <ExternalLink href='https://dribbble.com/marcomunooz' >
                Marco Muñoz
              </ExternalLink>
            </WhiteText>
          </BodyText>
          <SocialMediaButtons />
        </FooterLayout>
      </Container>
    </FooterWrapper>
  )
};

export default Footer;
