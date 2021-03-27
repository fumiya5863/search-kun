import React from 'react';
import { Link } from 'react-router-dom';

const RouteLink = ({ styledRouteLink, value, url }) => {
    return (
        <Link style={styledRouteLink} to={url}>
            {value}
        </Link>
    );
};

export { RouteLink };
