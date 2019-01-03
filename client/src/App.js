import React, { Fragment } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import ErrPage from './components/ErrPage';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route component = {ErrPage} />
      </Switch>
    </Container>
  </Fragment>
)


export default App;
