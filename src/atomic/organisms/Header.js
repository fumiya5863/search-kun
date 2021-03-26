import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import { NavTitle } from '@molecules/NavTitle';
import { NavRouteLink } from '@molecules/NavRouteLink';

const StyledNavbar = styled(Navbar)`
    position: static;
    left: 0px;
    right: 0px;
    height: auto;
    margin-bottom: 15px;
    padding-bottom: 10px;
`;


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

export default class Header extends Component {
    render()
    {
        return(
            <header>
                <StyledNavbar bg="light" expand="lg">
                    <NavTitle />

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavRouteLink className="mr-auto" linkSettings={linkSettings} />
                    </Navbar.Collapse>
                </StyledNavbar>
            </header>
        );
    }
}