import React, { useState } from 'react'

const InputField = ({ tasks, setTasks }) => {
    const [inputData, setInputData] = useState('')

    const AddTask = (e) => {
        e.preventDefault();
        if (inputData === '')
            return
        const newTask = {
            isChecked: false,
            content: inputData
        }
        setInputData('')
        setTasks([...tasks, newTask])
    }
    return (
        <form className='input-field' onSubmit={AddTask}>
            <input type="text" placeholder='Enter Task'
                onChange={(e) => setInputData(e.target.value)}
                value={inputData}
            />
            <button type='submit'
                onClick={AddTask}
            >
                Add Task</button>
        </form>
    )
}

export default InputField