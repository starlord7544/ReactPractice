import React, { useState } from 'react'

const Board = () => {
    const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 6], [0, 4, 8], [2, 4, 6]]
    const initialArr = Array(9).fill(null)
    const [boardArr, setBoardArr] = useState(initialArr)
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState(null)

    const checkWin = (newBoard) => {
        for (let [a, b, c] of winPatterns) {
            if (newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c] && newBoard[a] !== null) {
                return newBoard[a]
            }
        }
        return null
    }

    const handleClick = (eleIdx) => {
        if (boardArr[eleIdx] !== null)
            return

        let newBoard = boardArr.map((ele, idx) => idx === eleIdx ? turn : ele)
        const newWinner = checkWin(newBoard)
        setBoardArr(newBoard)
        if (newWinner)
            setWinner(newWinner)
        else
            setTurn((prev) => (prev === 'X' ? 'O' : 'X'))
    }
    const handleReset = () => {
        setBoardArr(initialArr)
        setWinner(null)
    }
    return (
        <>
            {
                !winner ?
                    boardArr.map((ele, idx) => {
                        return (
                            <div key={idx + 'brd'} className='cell' onClick={() => handleClick(idx)}>{ele}</div>
                        )
                    }) :
                    <div className='win-screen'>
                        <h1 className='winner'>Player {winner} Wins</h1>
                        <br />
                        <button className='reset-btn' onClick={handleReset}>Reset Game</button>
                    </div>
            }
        </>
    )
}

export default Board