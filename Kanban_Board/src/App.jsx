import { useState } from 'react'
import './App.css'

function generateId() {
    return Math.random().toString(36).substring(6, 9)
}

function App() {
    const [stage1, setStage1] = useState([])
    const [stage2, setStage2] = useState([])
    const [stage3, setStage3] = useState([])

    const board = [
        { id: "stage1", category: "ToDo", stage: stage1, setStage: setStage1 },
        { id: "stage2", category: "InProgress", stage: stage2, setStage: setStage2 },
        { id: "stage3", category: "Completed", stage: stage3, setStage: setStage3 }
    ]

    return (
        <div className='Board'>
            {/* flex gap-4 w-full h-full flex-1 self-stretch min-h-full min-w-full' */}
            {
                board.map(({ id, category, stage, setStage }, index) => (
                    <>
                        <Stage
                            id={id}
                            key={"stage-" + index}
                            category={category}
                            addTask={(value) => {
                                if (!value)
                                    return
                                setStage([...stage, value])
                            }}>
                            {
                                stage.map((task, idx) => (
                                    <Item key={"1" + idx} value={task} />
                                ))
                            }
                        </Stage>
                    </>
                ))
            }
        </div>
    )
}

export default App

const Stage = ({ id, addTask, children, category }) => {
    return (
        <div className="Stage">
            {/* border rounded p-4 flex  w-full flex-col text-lg font-semibold gap-4 flex-1 overflow-auto"> */}
            <h2><strong>{category}</strong></h2>
            <FormInput id={"form" + id} handleSubmit={addTask} />
            <hr />
            {children}
        </div>
    )
}

const Item = ({ value }) => {
    return (
        <div
            draggable
            onDragStart={(e) => console.log(e.target.innerText)}
            onDragEnd={(e) => console.log(e.target.innerText)}
            className="Item">
            {/* border rounded p-2"> */}
            {value}
        </div>
    )
}

const FormInput = ({ handleSubmit }) => {
    const [input, setInput] = useState("")
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(input.trim())
                setInput('')
            }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form >
    )
}
