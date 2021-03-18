import React, {
    Component,
} from 'react';
import { Container } from 'react-bootstrap';

import Contents from '@components/main/contents';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Contents />
            </Container>
        );
    }
}
