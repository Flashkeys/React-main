import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return Math.min(20, state + 1);
        case 'decrement':
            return Math.max(0, state - 1);
        case 'reset':
            return 0
        default:
            throw new Error();
    }
}
const Enkelreducer = () => {

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            Count: {state}
            <br></br>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}
export default Enkelreducer