import React from 'react';
import PropTypes from 'prop-types';
import styles from './BodyText.module.css';

const BodyText = ({ children, className }) => <p className={`${styles.bodyText} ${className || ''}`}>{children}</p>;

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default BodyText;
