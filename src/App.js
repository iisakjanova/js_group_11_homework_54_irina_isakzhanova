import {useState} from "react";
import {nanoid} from "nanoid";

import PlayingField from "./components/PlayingField/PlayingField";
import Counter from "./components/Counter";

const App = () => {
    const [cells, setCells] = useState(makeCells());
    const [tries, setTries] = useState(0);

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

    const incrementTries = () => {
        setTries(tries + 1);
    };

    const handleOnClickCell = id => {
        if(cells[id].isOpen) {
            return;
        }

        openCell(id);
        incrementTries();
    };

    return (
        <div className="App">
            <PlayingField
                cells={Object.values(cells)}
                onCellClick={handleOnClickCell}
            />
            <Counter
                tries={tries}
            />
        </div>
    )
};

export default App;