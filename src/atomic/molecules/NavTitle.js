import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Title } from '@atoms/Title';

const styledTitle = {
    marginTop: '10px',
};

const NavTitle = () => {
    return (
        <Link to="/">
            <Navbar.Brand>
                <Title styledTitle={styledTitle} />
            </Navbar.Brand>
        </Link>
    );
};

export { NavTitle };
