import { useEffect, useState } from 'react'
import './App.css'
import TaskContainer from './components/TaskContainer'
import InputField from './components/InputField'

function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const prevTasks = JSON.parse(localStorage.getItem("todos"))
        if (prevTasks && prevTasks.length)
            setTasks(prevTasks)
    }, [])
    
    useEffect(()=> {
        localStorage.setItem("todos" , JSON.stringify(tasks))
    }, [tasks])

    return (
        <div className='container'>
            <header>ToDo - List</header>
            <InputField tasks={tasks} setTasks={setTasks} />
            <TaskContainer tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default App
