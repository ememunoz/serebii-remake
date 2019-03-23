import React from 'react';
import styles from './Navbar.module.css';

import { Link } from 'react-router-dom';
import NavItem from './NavItems/NavItem/NavItem';
import NavItems from './NavItems/NavItems';
import SearchIcon from '../../Components/Icons/SearchIcon';
import Container from '../Container/Container';

const Navbar = props => {
  return (
    <div className={styles.background}>
      <Container style={{backgroundColor: 'transparent'}}>
        <nav className={styles.navbar}>
          <Link to='/' className={styles.logo}>Serebii.net</Link>
          <NavItems>
            <NavItem href='/news'>News</NavItem>
            <NavItem href='/games'>Games</NavItem>
            <NavItem href='/media'>Media</NavItem>
            <NavItem href='/pokedex'>Pokédex</NavItem>
            <NavItem href='/forums'>Forums</NavItem>
            <NavItem href='#'><SearchIcon style={{ height: '16px' }} /></NavItem>
          </NavItems>
        </nav>
      </Container>
    </div >
  );
}

export default Navbar;