import React from 'react';
// import { Card as BootstrapCard } from 'react-bootstrap';
import Bootstrap from 'react-bootstrap';

// import { CardTitle } from '@atoms/CardTitle';
import { H4 } from '@atoms/H4';
import { OutLink } from '@atoms/Link';
// import { CardContents } from '@atoms/CardContents';

// const Card = ({ className, row, styledCard }) => {
//     return (
//         <BootstrapCard style={styledCard} className={className}>
//             <BootstrapCard.Header>
//                 <CardTitle text={row.text} url={row.url} />
//             </BootstrapCard.Header>
//             <BootstrapCard.Body>
//                 <CardContents contents={row.contents} />
//             </BootstrapCard.Body>
//         </BootstrapCard>
//     );
// };

const Card = ({ className, row, children }) => {
    return (
        <Bootstrap.Card className={className}>
            <Bootstrap.Card.Header>
                {/* <CardTitle text={row.text} url={row.url} /> */}
                <H4>
                    <OutLink to={row.url}>{row.text}</OutLink>
                </H4>
            </Bootstrap.Card.Header>
            <Bootstrap.Card.Body>
                {/* <CardContents contents={row.contents} /> */}
                {children}
            </Bootstrap.Card.Body>
        </Bootstrap.Card>
    );
};

export { Card };
