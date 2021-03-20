import React, {
    Component,
} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@styles';
import Header from '@components/header';
import Main from '@components/main';
import Footer from '@components/footer';

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
