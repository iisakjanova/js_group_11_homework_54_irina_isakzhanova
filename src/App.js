import {useState} from "react";
import {nanoid} from "nanoid";

import PlayingField from "./components/PlayingField/PlayingField";
import Counter from "./components/Counter";
import ButtonReset from "./components/ButtonReset";
import "./App.css";

const App = () => {
    const [cells, setCells] = useState(makeCells());
    const [tries, setTries] = useState(0);
    const [gameComplete, setGameComplete] = useState(false);
    const [gameMessages, setGameMessages] = useState({
        title: `Let's play!`,
        start: 'Open cells to find the ring.',
        finish: '',
    });

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
        });
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
            setGameMessages({
                title: '',
                start: '',
                finish: 'Congratulations! The ring is found!',
            });
        }
    };

    const handleOnClickReset = () => {
        setCells(makeCells());
        setTries(0);
        setGameComplete(false);
        setGameMessages({
            title: `Let's play!`,
            start: 'Open cells to find the ring.',
            finish: '',
        });
    };

    return (
        <div className="App">
            <p>
                {gameMessages.title}
            </p>
            <p>
                {gameMessages.start}
            </p>
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
                <b>{gameMessages.finish}</b>
            </p>
        </div>
    )
};

export default App;