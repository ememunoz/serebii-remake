import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';

const Heading = props => {
  const className = props.className || '';
  switch (props.type) {
    case 'h1': return <h1 className={`${classes.heading} ${classes.h1} ${className}`}>{props.children}</h1>;
    case 'h2': return <h2 className={`${classes.heading} ${classes.h2} ${className}`}>{props.children}</h2>;
    case 'h3': return <h3 className={`${classes.heading} ${classes.h3} ${className}`}>{props.children}</h3>;
    case 'h4': return <h4 className={`${classes.heading} ${classes.h4} ${className}`}>{props.children}</h4>;
    case 'h5': return <h5 className={`${classes.heading} ${classes.h5} ${className}`}>{props.children}</h5>;
    case 'h6': return <h6 className={`${classes.heading} ${classes.h6} ${className}`}>{props.children}</h6>;
    default: return <h6 className={`${classes.heading} ${classes.h6} ${className}`}>{props.children}</h6>
  }
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired
}

export default Heading;
