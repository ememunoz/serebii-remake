import React from 'react';
import PropTypes from 'prop-types';
import './InteractiveLink.css'

const InteractiveLink = ({ children, href }) => <a className='interactiveLink' href={href}>{children}</a>;

InteractiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
}

export default InteractiveLink;
