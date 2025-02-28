import React, { useState } from 'react'
import './styles.css'
import useTicTacToe from '../hooks/UseTicTacToe'

const TicTacToe = () => {
    const { board, resetGame, getStatusMessage, handleClick } = useTicTacToe()
    return (
        <>
            <div className="game">
                <div className="status">
                    {getStatusMessage()}
                    <button className='reset-btn' onClick={() => resetGame()}>Reset Game</button>
                </div>
                <div className="board">
                    {
                        board.map((boardEle, idx) => {
                            return <button
                                className='cell'
                                onClick={() => handleClick(idx)}
                                disabled={boardEle !== null}
                                key={idx}>
                                {boardEle}
                            </button>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TicTacToe