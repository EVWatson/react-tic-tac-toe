import React from 'react';

function Square(props) {
    return (  
      <button 
       className={props.winningSquare.includes(props.index) ? "winningSquares": "square"}
       onClick = {props.onClick}>
        {props.value}
      </button>
    );
}


export default Square;