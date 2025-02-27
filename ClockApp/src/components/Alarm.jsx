import React, { useContext } from 'react'
import { AlarmContext } from '../contexts'
import Delete from'../assets/Delete.svg'

const Alarm = () => {
    const { alarmArr, alarmTime, setAlarmTime, handleSubmit, deleteAlarm, alarmTitle, setAlarmTitle } = useContext(AlarmContext)
    return (
        <div className='alarm' onSubmit={(e) => handleSubmit(e)}>
            <form className="alarmInput">
                <div className="inputContainer">
                    <input
                        type="text"
                        value={alarmTitle}
                        onChange={(e) => setAlarmTitle(e.target.value)}
                        required={true}
                        placeholder='Add Alarm title'
                        className='alarmTitleInput'
                        />
                    <input
                        type="time"
                        value={alarmTime}
                        onChange={(e) => setAlarmTime(e.target.value)}
                        required={true}
                        className='alarmTimeInput'
                    />
                </div>
                <button type='submit' className='addBtn btn'>Add Alarm</button>
            </form>
            <div className="allAlarms">
                {
                    alarmArr.map((ele, idx) => {
                        return (
                            <div
                                className="alarmELe"
                                key={'alrm' + idx}
                            >
                                <div className="alarmTitle">{ele.title}</div>
                                <div className="alarmTime">{ele.time}</div>

                                <div
                                    className="deleteBtn"
                                    onClick={() => deleteAlarm(idx)}
                                >
                                    <img src={Delete} alt="del34"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Alarm