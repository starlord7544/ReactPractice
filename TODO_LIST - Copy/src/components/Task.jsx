import React, { useState } from 'react'
import Buttons from './Buttons'

const Task = ({ isChecked, content, id, delBtn, editTask, checkTask }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(content)
    const [taskCheck, setTaskCheck] = useState(isChecked)

    const saveTask = () => {
        setIsEditing(false)
        editTask(id, editedContent)
    }

    const handleCheck = () => {
        setTaskCheck((prev) => !prev)
        checkTask(id, taskCheck)
    }

    return (
        <div className='task'>
            <input
                type="checkbox"
                className='checkbox'
                defaultChecked={taskCheck}
                value={taskCheck}
                onClick={handleCheck}
            />
            {
                isEditing ? (
                    <input type="text" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} autoFocus />
                ) : (
                    <div className="task-content">{content}</div>
                )
            }
            <Buttons
                delBtn={delBtn}
                id={id}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                saveTask={saveTask}
            />
        </div>
    )
}

export default Task