import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

import { CardTitle } from '@atoms/CardTitle';
import { CardBody } from '@atoms/CardBody';

const Card = ({
    className,
    row
}) => {
    return (
        <BootstrapCard className={className}>
            <BootstrapCard.Header>
                <CardTitle CardText={row[0]} />
            </BootstrapCard.Header>
            <CardBody row={row[1]} />
        </BootstrapCard>
    );
};

export { Card };