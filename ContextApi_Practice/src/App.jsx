import React from 'react'
import './App.css'
import Login from './components/Login'
import Profiles from './components/Profiles'
import UserContextProvider from './context/UserContextProvider'

function App() {

    return (
        <UserContextProvider>
            <div className='bg-gray-500 p-5 text-4xl rounded-2xl'>
                <Login />
                <br />
                <Profiles />
            </div>
        </UserContextProvider>
    )
}

export default App
