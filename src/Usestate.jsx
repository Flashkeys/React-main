import React, { useState } from 'react';

const UseState = () => {
    const [color, setColor] = useState('ORANGE');


    return (
        <div className="container">
            <div className="radio">
            Orange<input type="radio" name="e" onChange={ () => setColor("ORANGE")}></input>
            </div><div className="radio">
            Green<input type="radio" name="e" onChange={ () => setColor("GREEN")}></input>
            </div><div className="radio">
            Blue<input type="radio" name="e" onChange={ () => setColor("BLUE")}></input>
            </div><div className="radio">
            Red<input type="radio" name="e" onChange={ () => setColor("RED")}></input>
            </div>

            <p>You have choosen {color} as your color! </p>
        </div>
    )
}
export default UseState