import React from 'react';
import './Cell.css';

const Cell = props => {
    const cellClasses = ['cell'];
    let item = '';

    if(props.isOpen) {
        cellClasses.push('open-cell');

        if (props.hasItem) {
            item = 'O';
        }
    }

    return (
        <div className={cellClasses.join(' ')}
             onClick={props.onClick}
        >
            {item}
        </div>
    );
};

export default Cell;