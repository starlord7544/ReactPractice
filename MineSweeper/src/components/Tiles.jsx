import React, { useContext, useState } from 'react'
import { MyContext } from '../contexts/MineSweeperContext'

const Tiles = ({ idx }) => {

    const { boardArr, handleTileClick, revealMines, visitedArr } = useContext(MyContext)

    const content = () => {
        if (!revealMines) {
            if (boardArr[idx] === 'X')
                return "💣"
            if (boardArr[idx] !== null && boardArr[idx] !== -69 && boardArr[idx] !== 0)
                return boardArr[idx]
            return ""
        }
        else {
            if (boardArr[idx] === 'X' || boardArr[idx] === -69)
                return "💣"
            return (boardArr[idx] !== null && boardArr[idx] !== 0) ? boardArr[idx] : ""
        }
    }

    return (
        <div
            className={
                // boardArr[idx] === 'X' ? 'mine cell' : "cell"
                boardArr[idx] === 'X' ? ('cell mine') : (visitedArr[idx] ? ('cell visitedCell') : ('cell'))
            }
            onClick={() => handleTileClick(idx)}
        >
            {/* {boardArr[idx]} */}
            {/* {
                boardArr[idx] !== null && boardArr[idx] !== -69 ? (boardArr[idx] === 'X' ? "💣" : boardArr[idx]) : ""
            } */}
            { content() }
        </div>
    )
}

export default Tiles