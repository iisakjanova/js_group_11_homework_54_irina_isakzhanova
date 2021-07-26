import React from 'react';
import Cell from "../Cell/Cell";
import './PlayingField.css';

const PlayingField = props => {
    return (
        <div className="playing-field">
            {props.cells.map(cell => (
                <Cell
                    key={cell.id}
                    isOpen={cell.isOpen}
                    hasItem={cell.hasItem}
                    onClick={() => props.onCellClick(cell.id)}
                />
            ))}
        </div>
    );
};

export default PlayingField;