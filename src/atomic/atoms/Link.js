import React from 'react';
import { Link as Href } from 'react-router-dom';

// const Title = ({ styledTitle }) => {
//     return <h4 style={styledTitle}>ふみやんオススメサイト</h4>;
// };

const Link = ({ className, children, to }) => (
    <Link Href={to} className={className}>
      {children}
    </Link>
);

export { Link };
