import React, {
    Component,
} from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavSetting = [
    {
        text: '検索',
        url: 'search',
    },
    {
        text: 'ニュース',
        url: 'news',
    },
    {
        text: 'SNS',
        url: 'sns',
    },
    {
        text: '買い物',
        url: 'shop',
    },
    {
        text: '地図',
        url: 'map',
    },
    {
        text: '地域',
        url: 'area',
    }
];

const NavLinkStyle = {
    color: '#6c757d',
    marginRight: '15px',
};

export default class NavApp extends Component {
    render() {
        const Links = NavSetting.map(
            (row, id) => {
                return (
                    <Link
                        style={
                            NavLinkStyle
                        }
                        key={
                            id
                        }
                        to={
                            row.url
                        }
                    >
                        {
                            row.text
                        }
                    </Link>
                );
            }
        );
        return (
            <Nav className="mr-auto">
                {Links}
            </Nav>
        );
    }
}
