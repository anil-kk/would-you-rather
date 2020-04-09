import React, { Component } from 'react';
import {
  Header,
  Button,
  Icon,
  Grid,
  Segment,
  Dropdown,
} from 'semantic-ui-react';

import { connect } from 'react-redux';

import { signIn } from '../actions';

const users = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: 'https://i.pravatar.cc/150?img=3' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: 'https://i.pravatar.cc/150?img=1' },
  },
];

class Login extends Component {
  state = { user: null };
  login() {
    this.props.signIn();
  }

  handleChange = (e, { value }) => this.setState({ user: value });

  render() {
    const gridStyle = {
      height: '60vh',
    };
    const columnWidth = { maxWidth: '450px' };
    const classNames = 'center aligned middle aligned';

    return (
      <Grid style={gridStyle} className={classNames}>
        <Grid.Column style={columnWidth}>
          <Header as='h2' icon textAlign='center'>
            <Icon name='sign-in' circular />
            <Header.Content>Login</Header.Content>
          </Header>

          <Segment basic>
            <Dropdown
              placeholder='Select Friend'
              fluid
              selection
              options={users}
              value={this.state.user}
              onChange={this.handleChange}
            />
          </Segment>

          <Button size='huge' primary onClick={() => this.login()}>
            <Icon name='send'></Icon>Login
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  signIn,
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
