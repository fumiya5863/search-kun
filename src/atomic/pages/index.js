import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '@styles';
import Header from '@organisms/Header';
import Footer from '@organisms/Footer';

export default class Index extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        );
    }
}
