import React from 'react';
import { Link as Href } from 'react-router-dom';

// const Title = ({ styledTitle }) => {
//     return <h4 style={styledTitle}>ふみやんオススメサイト</h4>;
// };

const OutLink = ({ className, children, to }) => (
    <OutLink Href={to} className={className} target="_blank">
      {children}
    </OutLink>
);

export { OutLink };
