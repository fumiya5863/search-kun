import React, {
    Component,
} from 'react';
import { Container } from 'react-bootstrap';

import Contents from '@components/main/contents';
// import Search from '@components/main/search';
import { SearchGroup } from '@molecules/SearchGroup';

export default class Main extends Component {
    render() {
        return (
            <Container>
                {/* <Search /> */}
                <SearchGroup />
                <Contents />
            </Container>
        );
    }
}
