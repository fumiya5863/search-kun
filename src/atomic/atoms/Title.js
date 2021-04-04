import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    > * {
        height: auto;
    }
`;

// const Title = ({ styledTitle }) => {
//     return <h4 style={styledTitle}>ふみやんオススメサイト</h4>;
// };

const Text = ({ className, children }) => (
    <Wrapper>{children}</Wrapper>
);

export { Text };
