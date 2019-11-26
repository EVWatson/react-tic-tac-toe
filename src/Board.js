import React from 'react';
import Square from './Square';


function renderSquare(props, i) {
    return ( 
    <Square 
    value={props.squares[i]}
    onClick = {()=> props.onClick(i)}
    />
    );
  };

function renderRow(props, rowumber) {
    const row = [];
    const rowNumber = rowumber;
    for(let i = rowNumber; i < rowumber*3+1; i++){

        row.push(renderSquare(props, i))
        return row;
    }
}


function Board(props) {

    const grid = [[]];
    
    for(let column = 0; column < 3; column++) {
        grid.push(
            <div className="board-row">
        {renderRow(props, column)}
    </div>
        )
    }
        return <div>{grid}</div>;
    }


  export default Board;





  {/* //   {renderSquare(props, 1)}
        //   {renderSquare(props, 2)}
        </div> */}
        {/* // <div className="board-row">
        //   {renderSquare(props, 3)}
        //   {renderSquare(props, 4)}
        //   {renderSquare(props, 5)}
        // </div>
        // <div className="board-row">
        //   {renderSquare(props, 6)}
        //   {renderSquare(props, 7)}
        //   {renderSquare(props, 8)}
        // </div> */}