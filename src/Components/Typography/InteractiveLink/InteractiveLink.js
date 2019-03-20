import React from 'react';
import PropTypes from 'prop-types';
import './InteractiveLink.css'

const InteractiveLink = props => <a className='InteractiveLink' href={props.href}>{props.children}</a>;

InteractiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
}

export default InteractiveLink;
