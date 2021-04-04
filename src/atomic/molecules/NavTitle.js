import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
// import styled from 'styled-components';

// import { Title } from '@atoms/Title';
// import { Text } from '@atoms/Title';
import { H4 } from '@atoms/H4';
import { Link } from '@atoms/Link';

// const styledTitle = {
//     marginTop: '10px',
// };

const Text = styled.h4`
    margin-top: 10px;
    height:auto;
`;

// const NavTitle = () => {
//     return (
//         <Link to="/">
//             <Navbar.Brand>
//                 {/* <Title styledTitle={styledTitle} /> */}
//                 <StyledText>
//                     <h4>ふみやんオススメサイト</h4>
//                 </StyledText>
//             </Navbar.Brand>
//         </Link>
//     );
// };

const NavTitle = () => {
    return (
        <Link to="/">
            <Navbar.Brand>
                {/* <Title styledTitle={styledTitle} /> */}
                <H4>ふみやんオススメサイト</H4>
            </Navbar.Brand>
        </Link>
    );
};

export { NavTitle };

