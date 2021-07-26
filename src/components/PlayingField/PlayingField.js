import React, {useState} from 'react';
import {nanoid} from "nanoid";

import Cell from "../Cell/Cell";
import './PlayingField.css';

const PlayingField = () => {
    const [cells, setCells] = useState(makeCells());

    function getRingIndex() {
        return Math.floor(Math.random() * 36);
    }

    function makeCells() {
        let cellsObj = {};
        let ringIndex = getRingIndex();

        for (let i = 0; i < 36; i++) {
            const cellId = nanoid();
            cellsObj[cellId] = {id: cellId, isOpen: false, hasItem: i === ringIndex}
        }

        return cellsObj;
    }

    const openCell = id => {
        setCells({
            ...cells,
            [id]: {
                ...cells[id],
                isOpen: true
            }
        })
    };

    return (
        <div className="playing-field">
            {Object.values(cells).map(cell => (
                <Cell
                    key={cell.id}
                    isOpen={cell.isOpen}
                    hasItem={cell.hasItem}
                    onClick={() => openCell(cell.id)}
                />
            ))}
        </div>
    );
};

export default PlayingField;