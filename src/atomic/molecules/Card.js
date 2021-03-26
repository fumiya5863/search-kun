import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

import { CardHeader } from '@atoms/CardHeader';
import { CardBody } from '@atoms/CardBody';

const Card = ({
    className,
    row
}) => {
    return (
        <BootstrapCard className={className}>
            <CardHeader title={row[0]} />
            <CardBody row={row[1]} />
        </BootstrapCard>
    );
};

export { Card };