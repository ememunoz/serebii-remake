import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = props => {
  return (
    <div className='Container' style={props.style}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default Container;
