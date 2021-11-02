import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Square({value, onClick}){ //Square will be the buttons on the site
  return (
    //value is the value that is displayed in the button. It is updated by the OnClick method and the deafult valye is null
      <Button className ="square" onClick={onClick} >
                {value}  
      </Button>
      
  )
  }
function ConnectFourBoard ()//this is the acctual board for the game. It holds all the buttons/squares
  {
    const[squares, setSquare] = useState(Array(42).fill(null)); //initalizes the array of buttons
    const [isYellowTurn, setYellowTurn] = useState(true); //Yellow is player one (places X) and although there is no mention of Red player in this code, they are player two (places O)
    const winner = calculateWinner(squares);// winner is either X or O 

    return(
      <div>
        <div> {/* Each of these div's contains a row of 7 renderSquares. There are 6 div's total */}
        {renderSquare(0)}
        {renderSquare(1)}        
        {renderSquare(2)}
        {renderSquare(3)}        
        {renderSquare(4)}        
        {renderSquare(5)}        
        {renderSquare(6)}
      </div>
      <div>
        {renderSquare(7)}
        {renderSquare(8)}        
        {renderSquare(9)}
        {renderSquare(10)}        
        {renderSquare(11)}        
        {renderSquare(12)}        
        {renderSquare(13)}
      </div>
      <div>
        {renderSquare(14)}
        {renderSquare(15)}        
        {renderSquare(16)}
        {renderSquare(17)}        
        {renderSquare(18)}        
        {renderSquare(19)}        
        {renderSquare(20)}
      </div>
      <div>
        {renderSquare(21)}
        {renderSquare(22)}        
        {renderSquare(23)}
        {renderSquare(24)}        
        {renderSquare(25)}        
        {renderSquare(26)}        
        {renderSquare(27)}
      </div>
      <div>
        {renderSquare(28)}
        {renderSquare(29)}        
        {renderSquare(30)}
        {renderSquare(31)}        
        {renderSquare(32)}        
        {renderSquare(33)}        
        {renderSquare(34)}
      </div>
      <div>
        {renderSquare(35)}
        {renderSquare(36)}        
        {renderSquare(37)}
        {renderSquare(38)}        
        {renderSquare(39)}        
        {renderSquare(40)}        
        {renderSquare(41)}
      </div>
    <div>{getWinner()}</div>
      </div>
    )
    function renderSquare(input) { //Each renderSquare is responisblie for displaying 1 button and contolling the value shown in it.
      return(
        <Square value = {squares[input]} onClick={() =>{
          const tempSquares = squares.slice();
          if(tempSquares[input]===null && winner === null){ //checks if the button has not already been selected and if the game is still going
            tempSquares[input]= isYellowTurn? "X" : "O"; //checks who's turn it is and assgins the appropriate value to the button
          setSquare(tempSquares);// updates the displayed array of buttons
          setYellowTurn(!isYellowTurn); // updates who's turn it is
          }
        }}/>
      )
  }

  function getWinner(){ // this function checks if a player has won the game and if they have it displays the winner
    if(winner) {
      return winner + " Won!"
    }
  }

  }

  

ReactDOM.render(
  <ConnectFourBoard/>,
  document.getElementById('root')
);

function calculateWinner(squares) { 
  const winningSets = [ // this is an array of all possible winning square combinations
    [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
    [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
    [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
    [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
    [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
    [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],
    [0,7,14,21],[7,14,21,28],[14,21,28,35],
    [1,8,15,22],[8,15,22,29],[15,22,29,36],
    [2,9,16,23],[9,16,23,30],[16,23,30,37],
    [3,10,17,24],[10,17,24,31],[17,24,31,38],
    [4,11,18,25],[11,18,25,32],[18,25,32,39],
    [5,12,19,26],[12,19,26,33],[19,26,33,40],
    [6,13,20,27],[13,20,27,34],[20,27,34,41]
  ];

  for (let i = 0; i < winningSets.length; i++){ // loops through all possible winning combinations
    const [a, b, c, d] = winningSets[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]){ // checks if a given combination has been achieved
      return squares[a]; // returns X or O depending on who has gotten the winning combination
    }
  }
  return null;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
