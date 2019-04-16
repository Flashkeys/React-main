import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'add_digit':
            if (state.length < 10) {
                return state + action.digit;
            }
            return state
        case 'slice':
            if (state > 0) {
                return state.slice(0, -1)
            }
            return state
        case 'reset':
            return ""
        default:
            throw new Error();
    }
}

const AdvanceReducer = () => {

    const [state, dispatch] = useReducer(reducer, "");

    return (
        <div className="text-align-center">
            Count: {state}
            <div className="container">
                <div>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "1" })}>1</button>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "2" })}>2</button>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "3" })}>3</button>
                    <br></br>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "4" })}>4</button>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "5" })}>5</button>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "6" })}>6</button>
                    <br></br>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "7" })}>7</button>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "8" })}>8</button>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "9" })}>9</button>
                    <br></br>
                    <button className="medium" onClick={() => dispatch({ type: 'add_digit', digit: "0" })}>0</button>
                    <button className="medium" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                    <br></br>
                    <button className="medium" onClick={() => dispatch({ type: 'slice' })}>undo</button>
                </div>
            </div>
        </div>
    )
}
export default AdvanceReducer