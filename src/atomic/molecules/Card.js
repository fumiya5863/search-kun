import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

import { CardHeader } from '@atoms/CardHeader';
import { CardBody } from '@atoms/CardBody';

const Card = ({
    CardClassName,
    contents,
    title
}) => {
    return (
        <BootstrapCard className="card-primary">
            <CardHeader title={title} />
            <CardBody contents={contents} />
        </BootstrapCard>
    );
};

export { Card };