import React, { useState } from 'react';

const Paint = () => {
    const [va, setVa] = useState("white");
    let grid = [];
    for (let i = 0; i < 16; i++) {
        grid[i + 1] = [];
        for (let j = 0; j < 16; j++) {
            grid[i + 1][j + 1] = va;
        }
    }

    const board = grid.map((btn) =>
        <div>{btn}</div>
    );

    return (
        <div>
            {board}
            <br></br>
            <div className="colors">
                <button className="white">o</button>
                <button className="blue">o</button>
                <button className="orange">o</button>
                <button className="black">o</button>
                <button className="red">o</button>
                <button className="green">o</button>
                <button className="yellow">o</button>
                <button className="pink">o</button>
            </div>
        </div>
    )
}
export default Paint