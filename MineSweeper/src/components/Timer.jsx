import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../contexts/MineSweeperContext'

const Timer = () => {
    const { seconds, setSeconds, isTimer, getTime } = useContext(MyContext)
    const [time, setTime] = useState('')

    useEffect(() => {
        if (!isTimer)
            return
        const interval = setInterval(() => {
            setSeconds((prev) => prev + (1))
        }, 1000);

        return () => clearInterval(interval)
    }, [isTimer])

    useEffect(() => {
      setTime(getTime())
    }, [seconds])
    

    return (
        <div className='timer'>Time : {time}</div>
    )
}

export default Timer