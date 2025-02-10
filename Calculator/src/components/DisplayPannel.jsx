import React from 'react'

const DisplayPannel = ({ value }) => {
    return (
        <div className="displayArea w-full flex select-none">
            <input className='displayInput overflow-x-scroll w-full h-20 text-4xl text-right outline-0 border-none p-2.5 bg-[#333] text-white rounded-[5px]' type="text" value={value} />
        </div>
    )
}

export default DisplayPannel