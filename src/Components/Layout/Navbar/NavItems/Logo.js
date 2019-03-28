import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  color: 'white',
  fontFamily: 'Skranji',
  fontSize: '3rem',
  textDecoration: 'none'
}

const Logo = () => <Link to='/' style={style}>Serebii.net</Link>;

export default Logo;
