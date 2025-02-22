import React, { useState } from 'react'

const Board = ({ boardArr, setBoardArr, turn, setTurn, setDraw, winner, setWinner }) => {
    const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const checkDraw = (newBoard) => {
        return newBoard.every(cell => cell !== null)
    }

    const checkWin = (newBoard) => {
        for (let i = 0; i < winPatterns.length; i++) {
            let [a, b, c] = winPatterns[i]
            if (newBoard[a] == newBoard[b] && newBoard[b] === newBoard[c] && newBoard[a] !== null)
                return newBoard[a]
        }
        return null
    }

    const handleClick = (idx) => {
        if (boardArr[idx] !== null || winner)
            return
        const newBoard = [...boardArr]
        newBoard[idx] = turn
        setBoardArr(newBoard)
        setTurn(prev => prev === 'X' ? 'O' : 'X')

        const winPlayer = checkWin(newBoard)

        if (winPlayer !== null) {
            setWinner(winPlayer)
        }
        else if (checkDraw(newBoard))
            setDraw(true)
    }

    return (
        <div className="board">
            {
                boardArr.map((ele, idx) => {
                    return (
                        <div key={'cell' + idx} className='cell' onClick={() => handleClick(idx)}>{ele}</div>
                    )
                })
            }
        </div>
    )
}

export default Board