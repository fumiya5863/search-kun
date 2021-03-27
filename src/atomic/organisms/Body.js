import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import { SearchForm } from '@molecules/SearchForm';
import Top from '@organisms/body/Top';

export default class Body extends Component {
    render() {
        return (
            <Container>
                <SearchForm />
                <Route exact path="/" component={Top}></Route>
                <Route exact path="domestic" component=""></Route>
            </Container>
        );
    }
}
