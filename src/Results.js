import React from 'react';
import './Results.css'

const heading = React.createElement(
    'div',
    {
        className: 'heading'
    }
);

const error = React.createElement(
    'div',
    {
        className: 'error'
    },
    'No films found'
);

export const Results = React.createElement(
    'main',
    null,
    heading,
    error
)
