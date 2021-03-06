import React from 'react';
import Board from './Board';

const locations = {0: '0,0', 1: '0,1', 2: '0,2', 3: '1,0', 4: '1,1', 5:'1,2', 6: '2,0', 7: '2,1', 8: '2,2'};

class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
          location: [],
        }],
        stepNumber: 0,
        xIsNext: true,
        isAscending: true,
      }
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          location: locations[i]
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    reverseOrder() {
      const currentOrder = this.state.isAscending; 
      this.setState({
      isAscending: !currentOrder
      })
  }
      
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const isDraw = calculateDraw(current.squares);
      const isAscending = this.state.isAscending;

      
      const moves = history.map((item, move) => {
        const desc = move ?
        'Go to move # ' + move + ' at location: ' +  item.location:
        'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)} className={item.location === current.location ? 'active': null}>{desc}</button>
          </li>
        ); 
      });

      let status;
      if (winner) {
        status = 'Winner ' + winner.winner;
      } else if(isDraw) {
          status = 'Draw';
        } else {
         status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winningSquare={winner ? winner.winningSquares: []}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{!isAscending ? moves.reverse(): moves}</ol>
            <div>
             <button onClick={()=> this.reverseOrder()} className='toggle'>Reverse Order</button>
             </div>
            
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {winner: squares[a], winningSquares: lines[i]};
      }
    }
    return null;
  }

  function calculateDraw(squares) {
    return !squares.includes(null);
  }

  export default Game;