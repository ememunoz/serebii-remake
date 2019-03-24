import React from 'react';
import './Secondary.css';
import PropTypes from 'prop-types';

import Heading from '../../../../Components/Typography/Heading/Heading';
import InteractiveLink from '../../../../Components/Typography/InteractiveLink/InteractiveLink';
import BodyText from '../../../../Components/Typography/BodyText/BodyText';
import Subheading from '../../../../Components/Typography/Subheading/Subheading';

const Secondary = props => (
  <div className='Secondary'>
    <img className='SecondaryImg' src={props.src} />
    <Heading type='h3'>{props.title}</Heading>
    <Subheading>{props.category}</Subheading>
    <BodyText className='SecondaryBody'>{props.body}</BodyText>
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
