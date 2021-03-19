import React, {
    Component,
} from 'react';
import { Card } from "react-bootstrap";

export default class Sns extends Component {
    render() {
        return (
            <Card className="card-primary">
                <Card.Header>
                    <h4>
                        検索
                    </h4>
                </Card.Header>
                <Card.Body>
                    <p>
                        Card{' '}
                        <code>
                            .card-primary
                        </code>
                    </p>
                </Card.Body>
            </Card>
        );
    }
}
