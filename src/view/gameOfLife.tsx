import {useState} from "react";
import {World} from "../core/world.ts";
import {Cell, CellStatus} from "../core/cell.ts";

function initialRandomState(numberOfRows = 30, numberOfColumns = 30) {
    const initialMatrix = Array(numberOfRows).fill(CellStatus.Dead).map(() =>
        Array(numberOfColumns).fill(CellStatus.Dead).map(() => Math.random() > 0.5 ? CellStatus.Alive : CellStatus.Dead)
    );
    return World.createFrom(initialMatrix);
}

export const GameOfLife = () => {
    const [world, setWorld] = useState(initialRandomState());
    const nextGeneration = () =>
        setWorld(previousWorld => previousWorld.nextGeneration());

    const columns = world.getCellMatrix()[0].length;
    return (
        <div>
            <h1>Game of Life</h1>
            <div style={gridStyles(columns)}>
                {world.getCellMatrix().map((row, i) =>
                    row.map((cell, j) => (
                        <div key={`${i}-${j}`} style={cellStyles(cell)}/>
                    ))
                )}
            </div>
            <div>
                <button onClick={nextGeneration}>Next Generation</button>
            </div>
        </div>
    );
};


function gridStyles(columns: number) {
    return {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 20px)`
    };
}

function cellStyles(cell: Cell) {
    return {
        width: '20px',
        height: '20px',
        backgroundColor: cell.isAlive() ? 'black' : 'white',
        border: '1px solid #ccc'
    };
}
