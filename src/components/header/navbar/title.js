import React, {
    Component,
} from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

const SearchIconStyle = {
    width: '28px',
};

export default class Title extends Component {
    render() {
        return (
            <Link to="/">
                <Navbar.Brand>
                    <SearchAlt style={SearchIconStyle} />
                    ふみやん検索
                </Navbar.Brand>
            </Link>
        );
    }
}
