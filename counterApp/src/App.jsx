import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Container2 from './Container2'

export default function App() {
  const [count, setCount] = useState(0)

  const [list, setList] = useState([]);

  

  useEffect(() => {
    setList([...list, count]);
  },[count])

  return (
    <>
      <div class="counter">
        <h1>Counter</h1>
        <p>{count}</p>
        <div class="btn-container">
          <button id="decrement" onClick={() => setCount(count - 1)}> <h2> - </h2> </button>
          <button id="increment" onClick={() => setCount(count + 1)}> <h2> + </h2> </button>
        </div>
      </div>
      <Container2 list={list} />
    </>
  )
}
