import React, {
    Component,
} from 'react';
import { Navbar } from 'react-bootstrap';

import Title from '@components/header/navbar/title';
import NavApp from '@components/header/navbar/nav';

const NavbarStyle = {
    position: 'static',
    left: '0px',
    right: '0px',
    height: 'auto',
    marginBottom: '15px',
    paddingBottom: '10px',
};

export default class NavbarApp extends Component {
    render() {
        return (
            <Navbar
                style={
                    NavbarStyle
                }
                bg="light"
                expand="lg"
            >
                <Title />

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <NavApp />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
