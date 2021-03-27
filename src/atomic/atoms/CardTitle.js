import React from 'react';

const CardTitle = ({
    text,
    url
}) => {
    return (
        <h4>
            <a href={url} target="_blank">{text}</a>
        </h4>
    );
};

export { CardTitle };