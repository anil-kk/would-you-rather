import React, { Fragment } from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';

const QuestionItem = (props) => {
  const { question, author } = props;
  return (
    <Fragment>
      <Item>
        <Item.Image size='tiny' src={author.avatarURL} />

        <Item.Content>
          <Item.Header>{author.name} asks</Item.Header>
          <Item.Meta>Would you rather</Item.Meta>

          <Item.Description>{question.optionOne.text}</Item.Description>

          <Item.Extra>
            <Button primary floated='right'>
              View Poll
              <Icon name='right chevron' />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Fragment>
  );
};

export default QuestionItem;
