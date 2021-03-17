import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Top from "@components/main/contents/top";

export default class Contents extends Component {
    
    render()
    {
        return(
            <>
                <Route exact path="/" component={Top}></Route>
            </>
        );
    }
}