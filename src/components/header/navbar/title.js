import React, {
    Component,
} from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Title extends Component {
    render() {
        return (
            <Link to="/">
                <Navbar.Brand>
                    ふみやん検索
                </Navbar.Brand>
            </Link>
        );
    }
}
