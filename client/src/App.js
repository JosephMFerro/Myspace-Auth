import React, { Fragment } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import ErrPage from './components/ErrPage';
import Home from './components/Home';
import NavBar from './components/NavBar';
import FetchUser from './components/FetchUser';
import Register from './components/Register';
import Login from './components/Login';
import Reset from './components/Reset';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <Fragment>
    <NavBar />
    <FetchUser />
    <Container>
      <Switch>
        <ProtectedRoute exact path = '/' component = {Home} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/register' component = {Register} />
        <Route exact path = '/reset' component = {Reset} />
        <Route component = {ErrPage} />
      </Switch>
    </Container>
  </Fragment>
)


export default App;
