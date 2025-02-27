import { createContext, useState, useEffect} from "react";

export const StopWatchContext = createContext()

const StopWatchContextProvider = ({ children }) => {
    const [seconds, setSeconds] = useState(0)
    const [isWatchRunning, setIsWatchRunning] = useState(false)
    const [lapArr, setLapArr] = useState([]) 

    const lapTime = (time) => {
        const newlapArr = [time, ...lapArr]
        setLapArr(newlapArr)
    }

    useEffect(() => {
        if (!isWatchRunning)
            return
        const watchInterval = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 10);

        return () => (
            clearInterval(watchInterval)
        )
    }, [isWatchRunning])

    const formatTime = (given_secs) => {
        const hours = Math.floor(given_secs / 3600).toString().padStart(2, '0')
        const mins = Math.floor((given_secs % 3600) / 60).toString().padStart(2, '0')
        const secs = (given_secs % 60).toString().padStart(2, '0')

        return `${hours} : ${mins} : ${secs}`
    }

    const timeToSecs = (time) => {
        const [hours, mins, secs] = time.split(':').map(Number)
        return hours*3600 + mins*60 + secs
    }
    const findLapDifference = (time1, time2) => {
        const diffInSecs = Math.abs(timeToSecs(time1) - timeToSecs(time2))
        return formatTime(diffInSecs)
    }

    const pauseWatch = () => setIsWatchRunning(false)
    const startWatch = () => setIsWatchRunning(true)
    const resetWatch = () => {
        setSeconds(0)
        setIsWatchRunning(false)
        setLapArr([])
    }

    const value = {
        watchTime: formatTime(seconds),
        startWatch,
        pauseWatch,
        resetWatch,
        isWatchRunning,
        lapArr,
        lapTime,
        findLapDifference
    }
    return (
        <StopWatchContext.Provider value={value}>
            {children}
        </StopWatchContext.Provider>
    )
}

export default StopWatchContextProvider