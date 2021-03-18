import React, {
    Component,
} from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className="card card-primary">
                <div className="card-header">
                    <h4>
                        検索
                    </h4>
                </div>
                <div className="card-body">
                    <p>
                        Card{' '}
                        <code>
                            .card-primary
                        </code>
                    </p>
                </div>
            </div>
        );
    }
}
