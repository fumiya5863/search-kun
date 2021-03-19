import React, { Component } from "react";
import { Form } from "react-bootstrap";

const FormStyle = {
    width: '80%',
    margin: 'auto'
};

export default class Search extends Component {
    render()
    {
        return(
            <Form style={FormStyle}>
                <Form.Group>
                    <Form.Control type="search" placeholder="google検索" />
                </Form.Group>
            </Form>
        );
    }
}