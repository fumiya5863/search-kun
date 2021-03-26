import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

export default class Body extends Component {
    render() {
        return (
            <Container>
                <SearchForm />
                <Route
                    exact
                    path="/"
                    component={
                        Top
                    }
                ></Route>
                <Route
                    exact
                    path="/search"
                    component={
                        Search
                    }
                ></Route>
            </Container>
        );
    }
}