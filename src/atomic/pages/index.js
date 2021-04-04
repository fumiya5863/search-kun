import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import '@style';
import { Header } from '@organisms/Header';
import Body from '@organisms/Body';
import Footer from '@organisms/Footer';

// export default class Index extends Component {
//     render() {
//         return (
//             <Router>
//                 <Header />
//                 <Body />
//                 <Footer />
//             </Router>
//         );
//     }
// }

const Index = () => (
    <Router>
        <Header />
        <Body />
        <Footer />
    </Router>
);

export {
    Index
};