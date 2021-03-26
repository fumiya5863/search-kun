import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Card } from '@molecules/Card';

const cardSettings = [
    [
        '検索',
        [
            {
                text: 'Goggle',
                url: 'https://google.com',
            },
            {
                text: 'Yahoo! JAPAN',
                url: 'https://www.yahoo.co.jp/'
            },
            {
                text: 'Bing',
                url: 'https://www.bing.com/'
            },
            {
                text: 'goo',
                url: 'https://www.goo.ne.jp/'
            },
            {
                text: 'DuckDuckGo',
                url: 'https://duckduckgo.com/'
            }
        ]
    ],
    [
        'ニュース',
        [
            {
                text: 'Goggleニュース',
                url: 'https://news.google.com/topstories?hl=ja&gl=JP&ceid=JP:ja',
            },
            {
                text: 'Yahoo!ニュース',
                url: 'https://news.yahoo.co.jp/'
            },
            {
                text: 'NHKニュース',
                url: 'https://www3.nhk.or.jp/news/'
            },
            {
                text: 'goo',
                url: 'https://www.goo.ne.jp/'
            },
            {
                text: 'DuckDuckGo',
                url: 'https://duckduckgo.com/'
            }
        ]
    ],
    [
        'Qiita',
        [
            {
                text: 'Goggle',
                url: 'https://google.com',
            },
            {
                text: 'Yahoo! JAPAN',
                url: 'https://www.yahoo.co.jp/'
            },
            {
                text: 'Bing',
                url: 'https://www.bing.com/'
            },
            {
                text: 'goo',
                url: 'https://www.goo.ne.jp/'
            },
            {
                text: 'DuckDuckGo',
                url: 'https://duckduckgo.com/'
            }
        ]
    ]
];

export default class Top extends Component {
    render()
    {
        const TopCards = cardSettings.map((row, id) => {
            return <Col key={id} xm={12} md={6} lg={3}>
                <Card className='card-primary' row={row} />
            </Col>
        });
        
        return (
            <Row>
                {TopCards}
            </Row>
        );
    }
}