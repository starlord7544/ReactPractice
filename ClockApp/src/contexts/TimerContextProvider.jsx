import { createContext, useEffect, useState } from "react";

export const TimerContext = createContext()


const TimerContextProvider = ({ children }) => {
    const [timeLeft, setTimeLeft] = useState(0)
    const [isTimerRunning, setIsTimerRunning] = useState(false)

    const [timerSecs, setTimerSecs] = useState(0)
    const [timerMins, setTimerMins] = useState(0)
    const [timerHours, setTimerHours] = useState(0)

    useEffect(() => {
        if (timeLeft === 0 && isTimerRunning) {
            // resetTimer()
            setIsTimerRunning(false)
            setTimeout(() => {
                window.alert('Times UP')
            }, 0);
            return
        }
        if (!isTimerRunning || timeLeft <= 0)
            return
        
        const timerInterval = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
        }, 1000);

        return () => (
            clearInterval(timerInterval)
        )

    }, [isTimerRunning, timeLeft])


    const getSecs = (givenHours, givenMins, givenSecs) => {
        return (givenHours * 3600) + (givenMins * 60) + givenSecs
    }

    const timeToSecs = (time) => {
        const [hours, mins, secs] = time.split(':').map(Number)
        return ((hours * 3600) + (mins * 60) + secs)
    }

    const formatTime = (given_secs) => {
        const hours = Math.floor(given_secs / 3600).toString().padStart(2, '0')
        const mins = Math.floor((given_secs % 3600) / 60).toString().padStart(2, '0')
        const secs = (given_secs % 60).toString().padStart(2, '0')

        return `${hours} : ${mins} : ${secs}`
    }

    const startTimer = () => {
        const totalSecs = getSecs(Number(timerHours), Number(timerMins), Number(timerSecs))
        if (totalSecs <= 0)
            return
        setTimeLeft(Number(totalSecs))
        setIsTimerRunning(true)
        // setTimerHours(0)
        // setTimerMins(0)
        // setTimerSecs(0)
    }

    const pauseTimer = () => {
        setIsTimerRunning(false)
    }

    const resumeTimer = () => {
        setIsTimerRunning(true)
    }

    const resetTimer = () => {
        setIsTimerRunning(false)
        setTimeLeft(0)
        setTimerHours(0)
        setTimerMins(0)
        setTimerSecs(0)
    }

    const value = {
        timeLeft,
        setTimeLeft,
        isTimerRunning,
        setIsTimerRunning,
        timerSecs,
        setTimerSecs,
        timerMins,
        setTimerMins,
        timerHours,
        setTimerHours,
        resetTimer,
        startTimer,
        pauseTimer,
        resumeTimer,
        formatTime,
    }

    return (
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContextProvider