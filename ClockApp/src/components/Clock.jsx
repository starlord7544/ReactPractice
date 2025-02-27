import React, { useContext } from 'react'
import { ClockContext } from '../contexts'

const Clock = () => {
    const { clockTimeIn24, clockTimeIn12, is12hr, setIs12hr } = useContext(ClockContext)

    return (
        <div className='clock'>
            <div className="clockTime">
                {is12hr ? clockTimeIn12 : clockTimeIn24}
            </div>
            <div className="clockBtns">
                {
                    is12hr ? (
                        <button onClick={() => setIs12hr(false)}>24hr</button>
                    ) : (
                        <button onClick={() => setIs12hr(true)}>12hr</button>
                    )
                }
            </div>
        </div>

    )
}

export default Clock