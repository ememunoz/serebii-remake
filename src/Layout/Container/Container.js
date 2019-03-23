import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ children, style }) => {
  return (
    <div className='container' style={style}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default Container;
