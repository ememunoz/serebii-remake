import React from 'react';
import './Secondary.css';
import PropTypes from 'prop-types';

import { Heading3 } from '../../../../Components/Typography/Headings';
import InteractiveLink from '../../../../Components/Typography/InteractiveLink/InteractiveLink';
import BodyText from '../../../../Components/Typography/BodyText';
import Subheading from '../../../../Components/Typography/Subheading';

const Secondary = ({ body, category, src, title }) => (
  <div className='Secondary'>
    <img className='SecondaryImg' src={src} />
    <Heading3>{title}</Heading3>
    <Subheading>{category}</Subheading>
    <BodyText className='SecondaryBody'>{body}</BodyText>
    <InteractiveLink href='#'>Continue reading...</InteractiveLink>
  </div>
)

Secondary.propTypes = {
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Secondary;
