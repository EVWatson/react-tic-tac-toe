import React from 'react';
import Square from './Square';


function renderSquare(props, i) {
    return ( 
    <Square 
    key={i}    
    value={props.squares[i]}
    onClick = {()=> props.onClick(i)}
    />
    );
  };

  function renderRow(props, x) {
      let row = [];
      for(let square = 0; square < 3; square++) {
        row.push(renderSquare(props, x+square))
      }
    return row;
  }


    function Board(props) {
    let grid = [<div>
        <div>{renderRow(props, 0)}</div> 
        <div>{renderRow(props, 3)}</div>
        <div>{renderRow(props, 6)}</div>
    </div>];
return grid;
       
    }


  export default Board;