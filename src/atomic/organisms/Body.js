import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Route } from '@route';

import { SearchForm } from '@molecules/SearchForm';
// import Top from '@organisms/body/Top';

// export default class Body extends Component {
//     render() {
//         return (
//             <Container>
//                 <SearchForm />
//                 <Route.Top />
//                 <Route.Domestic />
//             </Container>
//         );
//     }
// }


const Body = () => (
    <Container>
        <SearchForm />
        <Route.Top />
        <Route.Domestic />
    </Container>
);

export {
    Body
};