import React, { useDebugValue } from 'react'
import Task from './Task'

const TaskContainer = ({ tasks, setTasks }) => {
    const deleteTask = (id) => {
        setTasks(tasks.filter((_, idx) => {
            return idx !== id;
        }))
    }

    const editTask = (id, editedContent) => {
        setTasks(
            tasks.map((task, idx) =>
                id === idx ? { ...task, content: editedContent } : task
            )
        )
    }

    const checkTask = (id, taskStatus) => {
        setTasks(
            tasks.map((task, idx) =>
                id === idx ? { ...task, isChecked: taskStatus } : task
            )
        )
    }

    return (
        <div className='task-container'>
            {
                tasks.map((ele, idx) => {
                    return <Task
                        isChecked={ele.isChecked}
                        content={ele.content}
                        key={idx}
                        id={idx}
                        delBtn={deleteTask}
                        editTask={editTask}
                        checkTask={checkTask}
                    />
                })
            }
        </div>
    )
}

export default TaskContainer