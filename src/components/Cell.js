import React from 'react';

const Cell = ({ value }) => {
    return (
        <div className={`cell${value === 0 ? ' empty-cell' : ''}`}>
            {value !== 0 ? value : ''}
        </div>
    );
};

export default Cell;