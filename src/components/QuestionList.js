import React from 'react';
import { Item, Tab } from 'semantic-ui-react';

import { connect } from 'react-redux';

import QuestionItem from '../components/QuestionItem';

class QuestionList extends React.Component {
  state = { activeIndex: 1 };

  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  render() {
    const { questions, auth, users } = this.props;

    const questionIds = Object.keys(questions);

    const answered = questionIds.filter((questionId) => {
      return (
        questions[questionId].optionOne.votes.includes(auth.user.id) ||
        questions[questionId].optionTwo.votes.includes(auth.user.id)
      );
    });
    const unAnswered = questionIds.filter(
      (questionId) =>
        !questions[questionId].optionOne.votes.includes(auth.user.id) &&
        !questions[questionId].optionTwo.votes.includes(auth.user.id)
    );

    const panes = [
      {
        menuItem: 'Un Answered Questions',
        render: () => (
          <Tab.Pane>
            <Item.Group link>
              {unAnswered.map((questionId) => {
                const question = questions[questionId];
                const author = users[question.author];
                return (
                  <QuestionItem
                    key={question.id}
                    question={question}
                    author={author}
                  ></QuestionItem>
                );
              })}
            </Item.Group>
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Answered Questions',
        render: () => (
          <Tab.Pane>
            <Item.Group link>
              {answered.map((questionId) => {
                const question = questions[questionId];
                const author = users[question.author];
                return (
                  <QuestionItem
                    key={question.id}
                    question={question}
                    author={author}
                  ></QuestionItem>
                );
              })}
            </Item.Group>
          </Tab.Pane>
        ),
      },
    ];

    return (
      <div>
        <Tab
          panes={panes}
          onTabChange={this.handleTabChange}
          defaultActiveIndex={0}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    questions: state.questions,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(QuestionList);
