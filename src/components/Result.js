import React from 'react';
import {
  Divider,
  Segment,
  Grid,
  Header,
  Message,
  Progress,
  Label,
  Item,
} from 'semantic-ui-react';

const Result = (props) => {
  const { question, author, user } = props;
  const optOneCount = question.optionOne.votes.length;
  const optTwoCount = question.optionTwo.votes.length;
  const totalVotes = optOneCount + optTwoCount;
  const optOnePer = (optOneCount / totalVotes) * 100;
  const optTwoPer = (optTwoCount / totalVotes) * 100;

  const ribbon = () => (
    <Label color='yellow' floating>
      Your Vote
    </Label>
  );

  const showRibbonForOptionOne = question.optionOne.votes.includes(user.id)
    ? ribbon()
    : null;
  const showRibbonForOptionTwo = question.optionTwo.votes.includes(user.id)
    ? ribbon()
    : null;

  const optOneColor = question.optionOne.votes.includes(user.id)
    ? { color: 'green' }
    : null;
  const optTwoColor = question.optionTwo.votes.includes(user.id)
    ? { color: 'green' }
    : null;

  return (
    <Segment>
      <Header as='h1'>Asked by {author.name}</Header>
      <Divider></Divider>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Item.Group>
              <Item>
                <Item.Image size='small' src={user.avatarURL} />
                <Item.Content verticalAlign='middle'>
                  <Header as='h3'>Result</Header>
                  <Message size='big' {...optOneColor}>
                    Would you rather {question.optionOne.text}
                    {showRibbonForOptionOne}
                    <Progress percent={optOnePer} progress />
                    {`${optOneCount} out of ${totalVotes} votes.`}
                  </Message>
                  <Message size='big' {...optTwoColor}>
                    Would you rather {question.optionTwo.text}
                    {showRibbonForOptionTwo}
                    <Progress percent={optTwoPer} progress />
                    {`${optTwoCount} out of ${totalVotes} votes.`}
                  </Message>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Result;
