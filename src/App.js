import {useState} from "react";

import PlayingField from "./components/PlayingField/PlayingField";
import Counter from "./components/Counter";


const App = () => {
    const [tries, setTries] = useState(0);

    const incrementTries = () => {
        setTries(tries + 1);
    };

    return (
        <div className="App">
            <PlayingField
                onCellClick={incrementTries}
            />
            <Counter
                tries={tries}
            />
        </div>
    )
};

export default App;