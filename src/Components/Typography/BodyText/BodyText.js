import React from 'react';
import PropTypes from 'prop-types';
import styles from './BodyText.module.css';

const BodyText = props => <p className={`${styles.bodyText} ${props.className || ''}`}>{props.children}</p>;

BodyText.propTypes = {
}

export default BodyText;
