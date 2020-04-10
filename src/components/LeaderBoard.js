import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Item, Header, Statistic, Grid } from 'semantic-ui-react';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    const usersArr = Object.keys(users)
      .map((id) => {
        let answersCount = Object.keys(users[id].answers).length;
        let questionsCount = users[id].questions.length;
        return {
          ...users[id],
          answersCount: answersCount,
          questionsCount: questionsCount,
          total: answersCount + questionsCount,
        };
      })
      .sort((a, b) => b.total - a.total);

    return (
      <Item.Group divided>
        {usersArr.map((user) => (
          <Item key={user.id}>
            <Item.Image src={user.avatarURL} />

            <Item.Content verticalAlign='middle'>
              <Item.Header>{user.name}</Item.Header>

              <Item.Description>
                <Grid relaxed columns={2}>
                  <Grid.Column>
                    <Header size='small'>
                      {' '}
                      Answered Questions: {user.answersCount}
                    </Header>
                    <Header size='small'>
                      Created Questions: {user.questionsCount}
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Statistic size='large'>
                      <Statistic.Label>Score</Statistic.Label>
                      <Statistic.Value>{user.total}</Statistic.Value>
                    </Statistic>
                  </Grid.Column>
                </Grid>
              </Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
