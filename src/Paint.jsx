import React from 'react';

const Paint = () => {
    let grid = {};  
        for(let i = 0; i < 16; i++){
            grid[i+1] = {};
            for(let j = 0; j < 16; j++){
                grid[i+1][j+1] = "white";
            }
        }
        console.log(grid);
        
    return (
        <div>
            
        </div>
    )
}
export default Paint