import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './components/Nav';
import Login from './components/Login';
import Question from './components/Question';
import LeaderBoard from './components/LeaderBoard';
import Home from './components/Home';
import RouteAuth from './components/RouteAuth';

import { initUsersAsync, initQuestionsAsync } from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.initUsersAsync();
    this.props.initQuestionsAsync();
  }

  render() {
    const { auth } = this.props;

    return (
      <Container>
        {auth.isAuthenticated ? <Nav></Nav> : null}

        <Switch>
        <Route path='/login'>
            <Login />
          </Route>

          <RouteAuth>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/question/:id'>
              <Question />
            </Route>
            <Route exact path='/question'>
              <Question />
            </Route>
            <Route path='/leaderboard'>
              <LeaderBoard />
            </Route>
          </RouteAuth>

        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  initUsersAsync,
  initQuestionsAsync,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
