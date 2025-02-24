import React, { useContext, useState } from 'react'
import Timer from './Timer'
import Tiles from './Tiles'
import { MyContext } from '../contexts/MineSweeperContext'

const Board = () => {

    const { boardArr, isWon, gameOver, resetGame } = useContext(MyContext)

    return (
        <div className='board'>
            <nav className="top-bar">
                <Timer />
                <div className='status'>
                    {
                        gameOver ? "GAME OVER" : (isWon ? 'YOU WIN' : "")
                    }
                </div>
            </nav>
            <div className="tiles">
                {
                    boardArr.map((_, idx) => {
                        return (
                            <Tiles
                                key={'cell' + idx}
                                idx={idx}
                            />
                        )
                    })
                }
            </div>
            <button className='reset-btn' onClick={resetGame}>Reset Game</button>
        </div>
    )
}

export default Board