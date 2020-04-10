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


import {withRouter} from 'react-router'

class Login extends Component {
  state = { userId: null };
  login() {
    const { location } = this.props;
    const { state } = location;
    this.props.signIn(this.props.users[this.state.userId]);

    if (state && state.from) {
      this.props.history.replace(state.from);
      return;
    }
 
      this.props.history.push('/');
  }

  handleChange = (e, { value }) => this.setState({ userId: value });

  render() {
    const gridStyle = {
      height: '60vh',
    };
    const columnWidth = { maxWidth: '450px' };
    const classNames = 'center aligned middle aligned';

    const opts = Object.keys(this.props.users).map((id, index) => {
      const user = this.props.users[id];

      return {
        key: id,
        value: id,
        text: user.name,
        image: {
          avatar: true,
          src: `https://i.pravatar.cc/150?img=${index + 1}`,
        },
      };
    });

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
              options={opts}
              value={this.state.userId}
              onChange={this.handleChange}
            />
          </Segment>

          <Button size='huge' primary onClick={() => this.login()}  { ...(this.state.userId===null? {disabled:true}:null)} >
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
    users: state.users,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
