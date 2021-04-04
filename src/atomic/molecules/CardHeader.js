import React from 'react';
import { Card } from 'react-bootstrap';

const CardBody = ({children}) => (
  <Card.Body>
    {children}
  </Card.Body>
);

export {
  CardBody
};