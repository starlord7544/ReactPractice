import React, { useState } from 'react'
import DisplayPannel from './DisplayPannel'
import Button from './Button'

const Calculator = () => {
    const [display, setDisplay] = useState('')
    const btn = ["%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", "."]

    const handleAllClear = () => {
        setDisplay('')
    }
    const handelDelete = () => {
        if (display === 'Syntax Error' || display === 'Infinity')
            handleAllClear()
        else
            setDisplay(display.toString().slice(0, -1))
    }
    const handleBtn = (e) => {
        setDisplay(display + e.target.innerHTML)
    }
    const handleCalculation = () => {
        try {
            setDisplay(eval(display))
        } catch (error) {
            setDisplay('Syntax Error')
        }
    }
    return (
        <div className='calculator flex flex-col justify-evenly items-center bg-[#222] shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-5 rounded-[10px] w-[340px] h-[500px]'>
            <DisplayPannel value={display} />
            <div className="btnContainer grid grid-cols-4 gap-2.5 mt-5 select-none">
                <Button value="AC" action={handleAllClear} />
                <Button value={"DEL"} action={handelDelete} />
                {
                    btn.map((ele, idx) => <Button value={ele} action={handleBtn} key={idx} />)
                }
                <Button value={"="} action={handleCalculation} />
            </div>
        </div>
    )
}

export default Calculator