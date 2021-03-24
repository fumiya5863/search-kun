import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Contents from '@components/main/contents';
import { SearchForm } from '@molecules/SearchForm';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <SearchForm />
                <Contents />
            </Container>
        );
    }
}
