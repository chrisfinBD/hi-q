import React , {useState} from 'react';
import '../assets/css/game.css';
import Board from './Board'
import {initialBoard} from '../utils/helpers'
import { BOARD_SIZE, WALL, EMPTY, PIECE} from '../utils/constants'

const Game = () => {
    const [history, setHistory] = useState([{ squares: initialBoard}])
    const [selectedSquares, setSelectedSquares] = useState([-1, -1])
    const [stepNumber, setStepNumber] = useState(0)
    return (
        <div className="game">
            Hello I'm a Game
            <Board 
                squares={history[0].squares}
                selectedSquares={selectedSquares}
            />
            </div>
    )
}

export default Game