import React from 'react';
import PropTypes from 'prop-types';
import styles from './InteractiveLink.module.css'

const InteractiveLink = ({ children, href }) => <a className={styles.interactiveLink} href={href}>{children}</a>;

InteractiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
}

export default InteractiveLink;
