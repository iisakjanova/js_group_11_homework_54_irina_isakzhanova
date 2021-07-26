import {useState} from "react";
import {nanoid} from "nanoid";

import PlayingField from "./components/PlayingField/PlayingField";
import Counter from "./components/Counter";
import ButtonReset from "./components/ButtonReset";

const App = () => {
    const [cells, setCells] = useState(makeCells());
    const [tries, setTries] = useState(0);
    const [gameComplete, setGameComplete] = useState(false);
    const [gameMessage, setGameMessage] = useState('');

    function getRingIndex() {
        return Math.floor(Math.random() * 36);
    }

    function makeCells() {
        let cellsObj = {};
        let ringIndex = getRingIndex();

        for (let i = 0; i < 36; i++) {
            const cellId = nanoid();
            cellsObj[cellId] = {id: cellId, isOpen: false, hasRing: i === ringIndex}
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
        if (gameComplete) {
            return;
        }

        if(cells[id].isOpen) {
            return;
        }

        openCell(id);
        incrementTries();

        if(cells[id].hasRing) {
            setGameComplete(true);
            setGameMessage('Congratulations! The ring is found!')
        }
    };

    const handleOnClickReset = () => {
        setCells(makeCells());
        setTries(0);
        setGameComplete(false);
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
            <ButtonReset
                onClick={() => handleOnClickReset()}
            />
            <p>
                <b>{gameMessage}</b>
            </p>
        </div>
    )
};

export default App;