import React from 'react';
import PropTypes from 'prop-types';

import Background from './Background';
import Container from './Container';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <Background>
      <Navbar />
      <Container style={{ marginTop: 92 }}>
        {children}
      </Container>
      <Footer />
    </Background>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
