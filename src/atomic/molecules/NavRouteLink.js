import React from 'react';
import { Nav } from 'react-bootstrap';

import { RouteLink } from '@atoms/RouteLink';

const NavLinkStyle = {
    color: '#6c757d',
    marginRight: '15px',
};

const NavRouteLink = ({ className, linkSettings }) => {
    const RouteLinks = linkSettings.map((row, id) => {
        return (
            <RouteLink
                key={id}
                styledRouteLink={NavLinkStyle}
                value={row.text}
                url={row.url}
            />
        );
    });
    return <Nav className={className}>{RouteLinks}</Nav>;
};

export { NavRouteLink };
