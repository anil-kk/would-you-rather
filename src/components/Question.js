import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Result from '../components/Result';

import { updateAnswerAsync, addQuestionAsync } from '../actions/index';

import {
  Divider,
  Segment,
  Form,
  Grid,
  Header,
  Radio,
  Item,
} from 'semantic-ui-react';

class Question extends Component {
  state = { optionOne: '', optionTwo: '' };

  handleAnswerChange = (e, { value }) => this.setState({ value });

  handleAnswerSubmit = (e) => {
    e.preventDefault();

    const { value } = this.state;
    const { match, questions, auth } = this.props;
    const { id } = match.params;
    const question = id && questions[id];

    this.props.updateAnswerAsync(auth.user.id, question.id, value);
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    this.props.addQuestionAsync(optionOne, optionTwo, this.props.auth.user.id);
    this.props.history.push('/');
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    const { match, questions, users, auth } = this.props;
    const { id } = match.params;
    const question = id && questions[id];
    const author = question && users[question.author];

    const isAnswered =
      question &&
      (question.optionOne.votes.includes(auth.user.id) ||
        question.optionTwo.votes.includes(auth.user.id));

    return isAnswered ? (
      <Result question={question} author={author} user={auth.user}></Result>
    ) : (
      <Segment>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              {question ? (
                <Fragment>
                  <Item.Group>
                    <Item>
                      <Item.Image size='small' src={author.avatarURL} />

                      <Item.Content>
                        <Item.Header as='a'>{author.name} asks:</Item.Header>
                        <Item.Description>
                          <Header as='h5'>Would you rather</Header>
                          <Form onSubmit={this.handleAnswerSubmit}>
                            <Form.Field>
                              <Radio
                                label={question.optionOne.text}
                                name='radioGroup'
                                value='optionOne'
                                checked={this.state.value === 'optionOne'}
                                onChange={this.handleAnswerChange}
                              />
                            </Form.Field>
                            <Form.Field>
                              <Radio
                                label={question.optionTwo.text}
                                name='radioGroup'
                                value='optionTwo'
                                checked={this.state.value === 'optionTwo'}
                                onChange={this.handleAnswerChange}
                              />
                            </Form.Field>

                            <Form.Button
                              content='Submit'
                              {...(this.state.value
                                ? null
                                : { disabled: true })}
                              primary
                            />
                          </Form>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Fragment>
              ) : (
                <Fragment>
                  <Header as='h2'>Create new Question</Header>
                  <Header as='h5'>Would you rather</Header>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                      placeholder='be a front-end developer'
                      name='optionOne'
                      value={optionOne}
                      onChange={this.handleChange}
                    />
                    <Divider horizontal>Or</Divider>
                    <Form.Input
                      placeholder='full-stack developer'
                      name='optionTwo'
                      value={optionTwo}
                      onChange={this.handleChange}
                    />
                    <Form.Button
                      content='Submit'
                      {...(optionOne === '' || optionTwo === ''
                        ? { disabled: true }
                        : null)}
                      primary
                    />
                  </Form>
                </Fragment>
              )}
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions,
    users: state.users,
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  updateAnswerAsync,
  addQuestionAsync,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Question)
);
