import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h2>Login</h2>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder='username'
                className='username-input w-full border-0 focus:border-0'
                />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text" placeholder='password'
                className='password-input w-full border-0 focus:border-0'
                />
            <button
                onClick={(e) => handleSubmit(e)}
                className='submit-Btn'
            >
                Submit
            </button>
        </div>
    )
}

export default Login