import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

import { CardTitle } from '@atoms/CardTitle';
import { CardContents } from '@atoms/CardContents';

const Card = ({ className, row, styledCard }) => {
    return (
        <BootstrapCard style={styledCard} className={className}>
            <BootstrapCard.Header>
                <CardTitle text={row.text} url={row.url} />
            </BootstrapCard.Header>
            <BootstrapCard.Body>
                <CardContents contents={row.contents} />
            </BootstrapCard.Body>
        </BootstrapCard>
    );
};

export { Card };
