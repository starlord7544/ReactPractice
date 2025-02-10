import React, { useState, memo, useCallback } from 'react'
import Child from './Child'


const Parent = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(
        () => {
        console.log('Button clicked')
    }, [])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)} >increment</button>
            <Child handleClick={handleClick} />
        </>
    )
}

export default Parent