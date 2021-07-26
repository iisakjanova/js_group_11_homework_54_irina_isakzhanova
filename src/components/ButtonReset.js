import React from 'react';

const ButtonReset = props => {
    return (
        <button className="btn-reset"
                onClick={props.onClick}
        >
            Reset
        </button>
    );
};

export default ButtonReset;