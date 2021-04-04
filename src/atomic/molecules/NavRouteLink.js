import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

// import { RouteLink } from '@atoms/RouteLink';
import { Link } from '@atoms/Link';

// const NavLinkStyle = {
//     color: '#6c757d',
//     marginRight: '15px',
// };

const StyledLink = styled(Link)`
    color: #6c757d;
    margin-right: 15px;
`;

// const NavRouteLink = ({ className }) => {
//     // const RouteLinks = linkSettings.map((row, id) => {
//     const RouteLinks = Config.Site.menus.map((menu, id) => {
//         return (
//             <StyledRouteLink
//                 key={id}
//                 // styledRouteLink={NavLinkStyle}
//                 // value={row.text}
//                 // url={row.url}
//                 value={menu.text}
//                 url={menu.url}
//             />
//         );
//     });
//     return <Nav className={className}>{RouteLinks}</Nav>;
// };


const NavLinks = ({ className, values }) => (
    <Nav className={className}>
        {values.map((value, id) => (
            <StyledLink key={id} to={value.url}>
                {value.text}
            </StyledLink>
        ))}
    </Nav>
);

export { NavLinks };