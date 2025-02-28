import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState(null)
    const [draw, setDraw] = useState(false)
    const [boardArr, setBoardArr] = useState(Array(9).fill(null))
    const [winPat, setWinPat] = useState([])
    // const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const handleReset = () => {
        setBoardArr(Array(9).fill(null))
        setTurn('X')
        setDraw(false)
        setWinner(null)
        setWinPat([])
    }

    return (
        <div className="app">
            <h1>Tic - Tac - Toe</h1>
            <div className="status">
                {draw ? 'Draw' : !winner ? `${turn}'s turn` : `Player ${winner} Won`}
            </div>
            <Board
                turn={turn}
                setTurn={setTurn}
                setDraw={setDraw}
                boardArr={boardArr}
                setBoardArr={setBoardArr}
                winner={winner}
                setWinner={setWinner}
                winPat={winPat}
                setWinPat={setWinPat}
            />
            <button className='reset-btn' onClick={handleReset}>Reset</button>
        </div>
    )
}

export default App
