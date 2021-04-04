import React from 'react';
import { Route } from 'react-router-dom';
import Top from '@organisms/body/Top';

const Top = () => (
  <Route exact path="/" component={Top}></Route>
);

export {
  Top
};