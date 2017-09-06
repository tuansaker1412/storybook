import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card, CardTitle, CardText, CardLink, CardImg } from './Card';

storiesOf('Button', module)
  .add('Hello Button', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('Emoji', () => (
    <p>😀 😎 👍 💯</p>
  ));

storiesOf('Cards', module)
  .add('Blocks', () => (
    <Card>
      This is some text within a card block.
    </Card>
  ))
  .add('Titles, text, and links', () => (
    <Card>
      <CardTitle>Card title</CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <CardLink onClick={action('clicked')}>Card Link</CardLink>
      <CardLink onClick={action('clicked')}>Another Link</CardLink>
    </Card>
  ))
  .add('Images', () => (
    <Card>
      <CardImg></CardImg>
      <CardTitle>Card title</CardTitle>
    </Card>
  ));
