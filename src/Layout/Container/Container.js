import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default Container;
