import React from 'react';
import { Nav } from 'react-bootstrap';

import { RouteLink } from '@atoms/RouteLink'; 

const NavLinkStyle = {
    color: '#6c757d',
    marginRight: '15px',
}; 

const linkSettings = [
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
    },
];

const NavRouteLinkGroup = ({
    className
}) => {
    
    const RouteLinks =  linkSettings.map((row, id) => {
        return <RouteLink key={id} styledRouteLink={NavLinkStyle} value={row.text} url={row.url} />
    });
    return (
        <Nav className={className}>
            {RouteLinks}
        </Nav>
    );
};

export { NavRouteLinkGroup };