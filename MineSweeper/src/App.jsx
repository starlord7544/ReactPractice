import React from 'react'
import './App.css'
import Board from './components/Board'
import MyContextProvider from './contexts/MineSweeperContext'

const App = () => {
  return (
    <MyContextProvider>
      <div className='app'>
        <h1 className='title'>MINE SWEEPER</h1>
        <Board />
      </div>
    </MyContextProvider>
  )
}

export default App