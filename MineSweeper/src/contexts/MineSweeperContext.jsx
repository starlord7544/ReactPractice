import React, { createContext, useState } from "react";

export const MyContext = createContext()

const MyContextProvider = ({ children }) => {
    const createInitialArr = () => {
        const initialArr = Array(64).fill(null)
        const minesArr = new Set()

        while (minesArr.size < 10) {
            minesArr.add(Math.floor(Math.random() * 64))
        }

        minesArr.forEach(mine => initialArr[mine] = -69)
        return initialArr;
    }

    const [boardArr, setBoardArr] = useState(createInitialArr())
    const [seconds, setSeconds] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [isTimer, setIsTimer] = useState(true)
    const [isWon, setIsWon] = useState(false)
    const [revealMines, setRevealMines] = useState(false)

    const handleTileClick = (idx) => {
        if (gameOver || isWon)
            return
        if (boardArr[idx] !== null && (boardArr[idx] !== -69 || boardArr[idx] === 0))
            return
        if (boardArr[idx] === -69) {
            const newBoard = [...boardArr]
            newBoard[idx] = 'X';
            setBoardArr(newBoard)
            setIsTimer(false)
            setGameOver(true)
            setRevealMines(true)
            return
        }

        const newBoard = [...boardArr]
        const val = cntMines(idx, newBoard)
        newBoard[idx] = val;

        if (val === 0)
            revealEmptyTiles(newBoard, idx)

        if (checkWin(newBoard)) {
            setIsWon(true)
            setIsTimer(false)
            setRevealMines(true)
        }

        setBoardArr(newBoard)
    }

    const checkWin = (newBoard) => {
        return newBoard.every(cell => cell !== null)
    }

    const cntMines = (idx, newBoard) => {
        const row = Math.floor(idx / 8)
        const col = idx % 8

        const dir = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ]

        let cnt = 0;

        for (let [dx, dy] of dir) {
            let newRow = row + dx
            let newCol = col + dy
            let newIdx = (newRow * 8) + newCol

            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8)
                if (newBoard[newIdx] === -69 || newBoard[newIdx] === 'X')
                    cnt++
        }
        return cnt
    }

    const revealEmptyTiles = (newBoard, idx) => {

        const row = Math.floor(idx / 8)
        const col = idx % 8

        const dir = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ]

        for (let [dx, dy] of dir) {
            let newRow = row + dx
            let newCol = col + dy
            let newIdx = (newRow * 8) + newCol

            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                if (newBoard[newIdx] === null) {
                    const val = cntMines(newIdx, newBoard)
                    newBoard[newIdx] = val

                    if (val === 0)
                        revealEmptyTiles(newBoard, newIdx)
                }
            }
        }
    }

    const resetGame = () => {
        setBoardArr(createInitialArr)
        setSeconds(0)
        setGameOver(false)
        setIsTimer(true)
        setIsWon(false)
        setRevealMines(false)
    }

    const getTime = () => {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0')
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
        const secs = (seconds % 60).toString().padStart(2, '0')

        return `${hours} : ${mins} : ${secs}`
    }

    const AllValue = {
        boardArr,
        setBoardArr,
        gameOver,
        setGameOver,
        seconds,
        setSeconds,
        isTimer,
        setIsTimer,
        getTime,
        isWon,
        setIsWon,
        revealMines,
        setRevealMines,
        handleTileClick,
        resetGame
    }

    const value = {
        boardArr,
        isWon,
        gameOver,
        resetGame,
        seconds,
        setSeconds,
        isTimer,
        getTime,
        boardArr,
        handleTileClick,
        revealMines
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider