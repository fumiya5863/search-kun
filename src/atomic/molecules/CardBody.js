import React from 'react';
import { Card } from 'react-bootstrap';
import { H4 } from '@atoms/H4';
import { OutLink } from '@atoms/Link';

const CardHeader = () => (
  <Card.Header>
    <H4>
        <OutLink to={row.url}>{row.text}</OutLink>
    </H4>
  </Card.Header>
);

export {
  CardHeader
};