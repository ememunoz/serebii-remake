import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyles, theme } from './style';
import { ThemeProvider } from 'styled-components';

import Forums from './Pages/Forums/Forums';
import Games from './Pages/Games/Games';
import Home from './Pages/Home/Home';
import Media from './Pages/Media/Media';
import News from './Pages/News/News';
import Pokedex from './Pages/Pokedex/Pokedex';
import Layout from './Components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route path="/news" component={News} />
              <Route path="/games" component={Games} />
              <Route path="/media" component={Media} />
              <Route path="/pokedex" component={Pokedex} />
              <Route path="/forums" component={Forums} />
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
