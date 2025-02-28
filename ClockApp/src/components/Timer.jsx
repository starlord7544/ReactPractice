import React, { useContext } from 'react'
import { TimerContext } from '../contexts'

const Timer = () => {

    const {
        timeLeft,
        isTimerRunning,
        timerSecs, setTimerSecs,
        timerMins, setTimerMins,
        timerHours, setTimerHours,
        resetTimer, pauseTimer,
        startTimer, resumeTimer,
        formatTime
    } = useContext(TimerContext)

    console.log("rendered", timerSecs, typeof (timerSecs));

    return (
        <div className='timer'>
            <div className="timerTime">
                {
                    formatTime(timeLeft)

                }
            </div>
            <div className="timeInput">
                <input
                    type="number"
                    min={0} max={99} step={1}
                    // onChange={(e) => setTimerHours(
                    //     e.target.value === '' ? 0 : e.target.value > 99 ? 99 : (Number(e.target.value))
                    // )}
                    onChange={
                        (e) => {
                            const num = Number(e.target.value);
                            num > 59 ? setTimerHours(59) : setTimerHours(num.toString());
                        }
                    }
                    value={timerHours}
                    placeholder='00' />
                <input
                    type="number"
                    min={0} max={59} step={1}
                    // onChange={(e) => setTimerMins(
                    //     e.target.value === '' ? 0 : e.target.value > 59 ? 59 : (Number(e.target.value))
                    // )}
                    onChange={
                        (e) => {
                            const num = Number(e.target.value);
                            num > 59 ? setTimerMins(59) : setTimerMins(num.toString());
                        }
                    }
                    value={timerMins}
                    placeholder='00' />
                <input
                    type="number"
                    min={1} max={59} step={1}
                    onChange={
                        (e) => {
                            const num = Number(e.target.value);
                            num > 59 ? setTimerSecs(59) : setTimerSecs(num.toString());
                        }
                    }
                    value={timerSecs} />
            </div>
            <div className="timerBtns">
                <button className='resetBtn btn' onClick={resetTimer}>Reset</button>
                {isTimerRunning ? (
                    <button className='pauseBtn btn' onClick={pauseTimer}>Pause</button>
                ) : (
                    timeLeft === 0 ? (
                        <button className='startBtn btn' onClick={startTimer}>Start</button>
                    ) : (
                        <button className='resumeBtn btn' onClick={resumeTimer}>Resume</button>
                    )
                )}
            </div>
        </div>
    )
}

export default Timer