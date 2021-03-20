import React, {
    Component,
} from 'react';
import { Route } from 'react-router-dom';

import Top from '@components/main/contents/top';
import Search from '@components/main/contents/search';

export default class Contents extends Component {
    render() {
        return (
            <>
                <Route
                    exact
                    path="/"
                    component={
                        Top
                    }
                ></Route>
                <Route
                    exact
                    path="/search"
                    component={
                        Search
                    }
                ></Route>
            </>
        );
    }
}
