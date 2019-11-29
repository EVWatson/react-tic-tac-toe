import React from 'react';
import Square from './Square';


function renderSquare(props, i, key) {
    return ( 
    <Square 
    key={key}    
    value={props.squares[i]}
    index={i}
    onClick = {()=> props.onClick(i)}
    winningSquare={props.winningSquare}
    />
    );
  };

  function renderRow(props, x) {
      let row = [];
      for(let square = 0; square < 3; square++) {
        row.push(renderSquare(props, x+square, x.toString() + square.toString()))
      }
    return row;
  }


  function Board(props) {
    let grid = [<div></div>];
    for(let row = 0; row < 3; row++) {
    grid.push(<div className="board-row">{renderRow(props, row*3)}</div>)
    }
return grid;
  }



  export default Board;