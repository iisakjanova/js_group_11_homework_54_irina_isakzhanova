import React from 'react';
import './Cell.css';

const Cell = props => {
    const cellClasses = ['cell'];
    let symbol = '';

    if(props.isOpen) {
        cellClasses.push('open-cell');

        if (props.hasRing) {
            symbol = 'O';
        }
    }

    return (
        <div className={cellClasses.join(' ')}
             onClick={props.onClick}
        >
            {symbol}
        </div>
    );
};

export default Cell;