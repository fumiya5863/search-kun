import React, {
    Component,
} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'stisla-theme/dist/css/style.css';

import '@styles';
import Header from '@organisms/Header';
import Main from '@components/main';
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
