import { createContext, useState, useEffect } from "react";

export const AlarmContext = createContext()

const AlarmContextProvider = ({ children }) => {
    const [alarmArr, setAlarmArr] = useState([])
    const [alarmTime, setAlarmTime] = useState('')
    const [alarmTitle, setAlarmTitle] = useState('')

    const getTime = () => {
        const newDate = new Date()
        let hours = newDate.getHours()
        const mins = newDate.getMinutes().toString().padStart(2, '0')
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12
        hours = hours.toString().padStart(2, '0')

        return `${hours}:${mins} ${ampm}`
    }

    const formatTime = (timeStr) => {
        let [hours, mins] = timeStr.split(':').map(Number)
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12
        hours = hours.toString().padStart(2, '0')
        mins = mins.toString().padStart(2, 0)

        return `${hours}:${mins} ${ampm}`
    }

    useEffect(() => {
        const alarmInterval = setInterval(() => {
            checkAlarm(getTime())
        }, 1000);

        return () => (
            clearInterval(alarmInterval)
        )
    }, [alarmArr])


    const deleteAlarm = (delIdx) => {
        setAlarmArr((prev) => prev.filter((_, idx) => idx !== delIdx))
    }


    const checkAlarm = (timeStr) => {
        let eleIdx = alarmArr.findIndex((ele => ele.time === timeStr))
        if (eleIdx !== -1) {
            const alarmObj = alarmArr[eleIdx]
            deleteAlarm(eleIdx)
            setTimeout(() => {
                window.alert(`Alarm  :  " ${alarmObj.title} "  at  ${alarmObj.time}`)
            }, 0)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!alarmTime || !alarmTitle)
            return

        if (alarmArr.some(ele => ele.time === alarmTime)) {
            setAlarmTime('')
            return;
        }

        const newAlarmObj = {
            title: alarmTitle,
            time: formatTime(alarmTime)
        }
        setAlarmArr((prev) => [newAlarmObj, ...prev])
        setAlarmTime('')
        setAlarmTitle('')
    }

    const value = {
        alarmArr, setAlarmArr,
        alarmTime, setAlarmTime,
        handleSubmit, deleteAlarm,
        alarmTitle, setAlarmTitle
    }
    return (
        <AlarmContext.Provider value={value}>
            {children}
        </AlarmContext.Provider>
    )
}

export default AlarmContextProvider
