import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render()
    {
        return(
            <header>
                <Navbar className="app-nav" bg="light" expand="lg">
                    <Navbar.Brand href="#home">ふみやん検索</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="app-nav-link" to="search">
                                検索
                            </Link>
                            <Link className="app-nav-link" to="news">
                                ニュース
                            </Link>
                            <Link className="app-nav-link" to="sns">
                                SNS
                            </Link>
                            <Link className="app-nav-link" to="shop">
                                買い物
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}