import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Col, Row } from 'react-bootstrap';

// import { cardSettings } from '@config/cardSettings';
import { Config } from '@config';
// import { Card } from '@molecules/Card';
import { CardBody } from '@molecules/CardBody';
import { CardHeader } from '@molecules/CardHeader';


import { H4 } from '@atoms/H4';
import { OutLink } from '@atoms/Link';
import { Paragraph } from '@atoms/Paragraph';

// const styledCard = {
//     height: '90%',
// };

const StyledCard = styled(Card)`
    height: 90;
`;

// export default class Top extends Component {
//     render() {
//         const TopCards = Config.Watch.sites.map((row, id) => {
//             return (
//                 <Col key={id} xm={12} md={6} lg={3}>
//                     {/* <Card styledCard={styledCard} className="card-primary" row={row} /> */}
//                     <StyledCard className="card-primary" row={row}>
//                         <CardHeader>
//                             <H4>
//                                 <OutLink to={row.url}>{row.text}</OutLink>
//                             </H4>
//                         </CardHeader>
//                         <CardBody>
//                             <Paragraph>{row.contents}</Paragraph>
//                         </CardBody>
//                     </StyledCard>
//                 </Col>
//             );
//         });

//         return <Row>{TopCards}</Row>;
//     }
// }

const Top = () => (
    <Row>
        {Config.Watch.sites.map((site, id) => (
            <Col key={id} xm={12} md={6} lg={3}>
                <StyledCard className="card-primary">
                    <CardHeader>
                        <H4>
                            <OutLink to={site.url}>{site.text}</OutLink>
                        </H4>
                    </CardHeader>
                    <CardBody>
                        <Paragraph>{site.contents}</Paragraph>
                    </CardBody>
                </StyledCard>
            </Col>
        ))}
    </Row>
);

export {
    Top
};