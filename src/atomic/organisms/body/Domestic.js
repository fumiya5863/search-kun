import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { cardSettings } from '@config/cardSettings';
import { Card } from '@molecules/Card';

const styledCard = {
    height: '90%',
};

export default class Domestic extends Component {
    render() {
        const TopCards = cardSettings.map((row, id) => {
            if (row.type === 1) {
                return (
                    <Col key={id} xm={12} md={6} lg={3}>
                        <Card styledCard={styledCard} className="card-primary" row={row} />
                    </Col>
                );
            }
        });

        return <Row>{TopCards}</Row>;
    }
}