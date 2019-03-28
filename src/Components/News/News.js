import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Heading3 } from '../Typography/Headings';
import Subheading from '../Typography/Subheading';
import BodyText from '../Typography/BodyText';
import LinkButton from '../UI/Buttons/LinkButton';

const NewsImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const NewsWrapper = styled.div`
  &>*:not(:last-child) {
    margin-bottom: .8rem;
  }
`;

const New = ({ id, imgSrc, subtitle, summary, title }) => {
  return (
    <NewsWrapper>
      <NewsImage src={imgSrc} />
      <Heading3>{title}</Heading3>
      <Subheading>{subtitle}</Subheading>
      {!!summary && summary.split(/(?:\r\n|\r|\n)/g).map((paragraph, i) => <BodyText key={i}>{paragraph}</BodyText>)}
      <LinkButton>Continue reading...</LinkButton>
    </NewsWrapper>
  )
};

New.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  imgSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default New;
