import React from 'react';
import PropTypes from 'prop-types';
import './Update.css';
import Heading from '../../../../Components/Typography/Heading/Heading';

const Update = props => (
  <div className='Update' style={{ backgroundImage: `url(${props.src})` }}>
    <div className='UpdateText'>
      <Heading type='h3'>{props.title}</Heading>
      <p className='UpdateTextSub details'>{props.category}</p>
    </div>
  </div>
)

Update.propTypes = {
  category: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default Update;