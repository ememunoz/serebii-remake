import React from 'react';
import PropTypes from 'prop-types';
import styles from './InteractiveLink.module.css'

const InteractiveLink = ({ children, href, newTab, type }) => (
  <a
    className={type === 'white' ? styles.interactiveLinkWhite : styles.interactiveLink}
    href={href}
    target={newTab ? '_blank' : null}
  >
    {children}
  </a>
);

InteractiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'white']),
}

export default InteractiveLink;
