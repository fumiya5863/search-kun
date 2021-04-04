import React, { Component } from 'react';
import { Config } from '@config';

// export default class Header extends Component {
//     render() {
//         return (
//             <footer className="text-center">
//                 <h3>
//                     <small>&copy;ふみやん.2021.</small>
//                 </h3>
//             </footer>
//         );
//     }
// }

const Footer = () => (
    <footer className="text-center">
        <h3>
            <small>{Config.Site.footer.text}</small>
        </h3>
    </footer>
);

export {
    Footer
};