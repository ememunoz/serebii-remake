import React, { Component, Fragment } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Container from './Layout/Container/Container';

import Forums from './Pages/Forums/Forums';
import Games from './Pages/Games/Games';
import Home from './Pages/Home/Home';
import Media from './Pages/Media/Media';
import Navbar from './Layout/Navbar/Navbar';
import News from './Pages/News/News';
import Pokedex from './Pages/Pokedex/Pokedex';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Container style={{ backgroundColor: '#fff' }}>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/games" component={Games} />
            <Route path="/media" component={Media} />
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/forums" component={Forums} />
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
