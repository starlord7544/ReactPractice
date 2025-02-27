import React, { useContext } from 'react'
import { StopWatchContext } from '../contexts'

const StopWatch = () => {
    const { watchTime, startWatch, pauseWatch, resetWatch, isWatchRunning, lapArr, lapTime, findLapDifference } = useContext(StopWatchContext)
    return (
        <div className='stopWatch'>
            <div className="watchTime">
                {watchTime}
            </div>
            <div className="stopwatchBtns">
                {
                    isWatchRunning ? (
                        <>
                            <button className='lapBtn btn' onClick={() => lapTime(watchTime)}>Lap</button>
                            <button className="pauseBtn btn" onClick={pauseWatch}>Stop</button>
                        </>
                    ) : (
                        <>
                            <button className="resetBtn btn" onClick={resetWatch} disabled={watchTime === '00 : 00 : 00'}>Reset</button>
                            <button className='startBtn bnt' onClick={startWatch}>
                                {watchTime === '00 : 00 : 00' ? 'Start' : 'Resume'}
                            </button>
                        </>
                    )
                }
            </div>
            <div className="lapTimes">
                <table border={0} cellSpacing={'20px'} className='table'>
                    <thead align='center'>
                        <tr>
                            <td>Lap</td>
                            <td>Lap Times</td>
                            <td>OverAll Time</td>
                        </tr>
                    </thead>
                    <tbody align='center'>
                        {
                            lapArr.map((ele, idx) => {
                                const prevTime = idx < lapArr.length - 1 ? lapArr[idx + 1] : '00 : 00 : 00'
                                const lapTimeDiff = findLapDifference(ele, prevTime)
                                return (
                                    <tr key={'tr' + idx}>
                                        <td key={'idx' + idx}>{lapArr.length - idx}</td>
                                        <td key={'LapTime' + idx}>
                                            {
                                                idx === lapArr.length - 1 ? ele : lapTimeDiff
                                            }
                                        </td>
                                        <td key={'OverAll' + idx}>{ele}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default StopWatch