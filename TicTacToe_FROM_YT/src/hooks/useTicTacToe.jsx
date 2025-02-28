import { useState } from "react"

const initialBoard = () => Array(9).fill(null)

const useTicTacToe = () => {
    const [board, setBoard] = useState(initialBoard())
    const [isXNext, setIsXNext] = useState(true)

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < winPatterns.length; i++) {
            const [a, b, c] = winPatterns[i]
            if (currentBoard[a] === currentBoard[b]
                && currentBoard[a] === currentBoard[c]
                && currentBoard[a] !== null) {
                return currentBoard[a]
            }
        }
        return null
    }

    const handleClick = (idx) => {
        const winner = calculateWinner(board)
        if (winner || board[idx])
            return
        const newBoard = [...board]
        newBoard[idx] = isXNext ? 'X' : 'O'
        setBoard(newBoard)
        setIsXNext((prevIsXNext) => !prevIsXNext)
    }

    const getStatusMessage = () => {
        const winner = calculateWinner(board)
        if (winner) return `Player ${winner} wins!`
        if (!board.includes(null))
            return `It's a Draw`
        return `Player ${isXNext ? "X" : "O"}'s turn`
    }
    const resetGame = () => {
        setBoard(initialBoard())
        setIsXNext(true)
    }

    return { board, handleClick, getStatusMessage, resetGame }
}

export default useTicTacToe