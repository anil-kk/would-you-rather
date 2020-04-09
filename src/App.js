import React from 'react';
import * as API from './service/_DATA';

import { Container } from 'semantic-ui-react';

import Nav from './components/Nav';
import Login from './components/Login';
import Question from './components/Question';
import LeaderBoard from './components/LeaderBoard';
import Home from './components/Home';

import { Route, Switch, NavLink, Link } from 'react-router-dom';

import { connect } from 'react-redux';

function App({ auth }) {
  return (
    <Container>
      {auth.isAuthenticated ? <Nav></Nav> : null}

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/question'>
          <Question />
        </Route>
        <Route path='/leaderboard'>
          <LeaderBoard />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(App);
