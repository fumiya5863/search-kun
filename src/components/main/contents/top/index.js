import React, {
    Component,
} from 'react';
import {
    Row,
    Col,
} from 'react-bootstrap';

import Search from '@components/main/contents/top/search';
import News from '@components/main/contents/top/news';
import Sns from '@components/main/contents/top/sns';
import Shop from '@components/main/contents/top/shop';

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.contents = {
            row1: [
                <Search />,
                <News />,
                <Sns />,
                <Shop />,
            ],
            row2: [
                <Search />,
                <News />,
                <Sns />,
                <Shop />,
            ],
            row3: [
                <Search />,
                <News />,
                <Sns />,
                <Shop />,
            ],
            row4: [
                <Search />,
                <News />,
                <Sns />,
                <Shop />,
            ],
        };
    }

    render() {
        const ROW1 = this.contents.row1.map(
            (value, id) => {
                return (
                    <Col
                        xm={
                            12
                        }
                        md={6}
                        lg={3}
                        key={
                            id
                        }
                    >
                        {
                            value
                        }
                    </Col>
                );
            }
        );
        const ROW2 = this.contents.row1.map(
            (value, id) => {
                return (
                    <Col
                        xm={
                            12
                        }
                        md={6}
                        lg={3}
                        key={
                            id
                        }
                    >
                        {
                            value
                        }
                    </Col>
                );
            }
        );
        const ROW3 = this.contents.row1.map(
            (value, id) => {
                return (
                    <Col
                        xm={
                            12
                        }
                        md={6}
                        lg={3}
                        key={
                            id
                        }
                    >
                        {
                            value
                        }
                    </Col>
                );
            }
        );
        const ROW4 = this.contents.row1.map(
            (value, id) => {
                return (
                    <Col
                        xm={
                            12
                        }
                        md={6}
                        lg={3}
                        key={
                            id
                        }
                    >
                        {
                            value
                        }
                    </Col>
                );
            }
        );
        return (
            <>
                <Row>
                    {ROW1}
                </Row>
                <Row>
                    {ROW1}
                </Row>
                <Row>
                    {ROW1}
                </Row>
                <Row>
                    {ROW1}
                </Row>
            </>
        );
    }
}
