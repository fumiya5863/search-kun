import React, {
    Component,
} from 'react';

import { Card } from '@molecules/Card';

export default class News extends Component {
    render() {
        const element = <p>hello</p>
        return (
            <Card title={<h4>検索</h4>} contents={element} />
        );
    }
}
