import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Card } from '@molecules/Card';

const cardSettings = [
    [
        '検索',
        [
            {
                text: 'Goggle',
                url: 'aa',
            }
        ]
    ],
];

export default class Top extends Component {
    render()
    {
        const TopCards = cardSettings.map((row, id) => {
            return <Col key={id} xm={12} md={6} lg={3}>
                <Card className='card-primary' row={row} />
            </Col>
        });
        
        return(
            <Row>
                <Col xm={12} md={6} lg={3}>
                    <Card className='card-primary' row={cardSettings[0]} />
                </Col>
            </Row>
        );
    }
}