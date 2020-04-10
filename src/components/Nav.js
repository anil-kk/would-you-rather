import React, { Component } from 'react';
import { Menu, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../actions';

import { withRouter } from 'react-router';

class Nav extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  logOut = () => {
    this.props.signOut();
    this.props.history.push('/login');
  };

  render() {
    const { activeItem } = this.state;
    const { auth } = this.props;

    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to='/'
        />
        <Menu.Item
          name='newQuestion'
          active={activeItem === 'newQuestion'}
          onClick={this.handleItemClick}
          as={Link}
          to='/question'
        />
        <Menu.Item
          name='leaderBoard'
          active={activeItem === 'leaderBoard'}
          onClick={this.handleItemClick}
          as={Link}
          to='/leaderboard'
        />
        <Menu.Menu position='right'>
          <Menu.Item name='user'>
            {auth && auth.user ? (
              <Label as='a' color={'blue'}>
                <Image avatar spaced='right' src={auth.user.avatarURL} />
                {auth && auth.user && auth.user.name}
              </Label>
            ) : (
              <Icon name='user' size='large' />
            )}
          </Menu.Item>
          <Menu.Item name='logout' onClick={() => this.logOut()} />
        </Menu.Menu>
      </Menu>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = {
  signOut,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
