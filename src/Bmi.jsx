import React, { useState } from 'react';

const Bmi = () => {
    const [cm, setCm] = useState(undefined);
    const [kg, setKg] = useState(undefined);

    function onSubmit(e) {
        e.preventDefault()
    }
    

/* vikt / längd * längd = bmi */
    return (
        <div className="container">
        <form onSubmit={onSubmit}>
            <div>
                <input type="number" value={cm} onChange={(e) => setCm(e.target.value)}></input> Cm
            </div>
            <div>
                <input type="number" value={kg} onChange={(e) => setKg(e.target.value)}></input> Kg
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
            <div>
                <p>Bmi värdet är {(kg/cm/cm*10000).toFixed(1)}</p>
                
            </div>
            
        </div>
    )
}
export default Bmi