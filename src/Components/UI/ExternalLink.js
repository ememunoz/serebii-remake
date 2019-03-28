import React from 'react';
import styled from 'styled-components';

const AnchorTag = styled.a`
  &, &:link, &:visited {
    color: currentColor;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    position: relative;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    background-color: currentColor;
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    transition: transform .5s ease 
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const ExternalLink = ({ children, href }) => <AnchorTag target='_blank' href={href}>{children}</AnchorTag>

export default ExternalLink;
