import { createContext, useEffect, useState } from "react";

export const ClockContext = createContext()

const ClockContextProvider = ({ children }) => {
    const [is12hr, setIs12hr] = useState(true)
    const getCurrentTimeIn24 = () => {
        const newTime = new Date()
        const hours = newTime.getHours().toString().padStart(2, '0')
        const mins = newTime.getMinutes().toString().padStart(2, '0')
        const secs = newTime.getSeconds().toString().padStart(2, '0')

        return `${hours} : ${mins} : ${secs}`
    }

    const getCurrentTimeIn12 = () => {
        const newTime = new Date()
        let hours = newTime.getHours()
        const mins = newTime.getMinutes().toString().padStart(2, '0')
        const secs = newTime.getSeconds().toString().padStart(2, '0')

        if (hours > 12)
            hours = hours%12
        
        hours = hours.toString().toString().padStart(2, '0')

        return `${hours} : ${mins} : ${secs}`
    }

    

    const [clockTimeIn24, setClockTimeIn24] = useState(getCurrentTimeIn24())
    const [clockTimeIn12, setClockTimeIn12] = useState(getCurrentTimeIn12())

    useEffect(() => {

        const clockInterval = setInterval(() => {
            setClockTimeIn24(getCurrentTimeIn24())
            setClockTimeIn12(getCurrentTimeIn12())
        }, 1000)

        return () => (
            clearInterval(clockInterval)
        )
    }, [])

    const value = {
        clockTimeIn24,
        clockTimeIn12,
        is12hr,
        setIs12hr
    }
    return (
        <ClockContext.Provider value={value}>
            {children}
        </ClockContext.Provider>
    )
}

export default ClockContextProvider