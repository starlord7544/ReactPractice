import React from 'react'

const Buttons = ({ delBtn, id, isEditing, setIsEditing, saveTask }) => {
    return (
        <div className="task-action">
            {
                isEditing ? (
                    <button onClick={saveTask}>Save</button>
                ) : (
                    <>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => delBtn(id)}>Delete</button>
                    </>
                )
            }
        </div >
    )
}
export default Buttons