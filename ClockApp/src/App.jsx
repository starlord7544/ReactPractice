import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AlarmContextProvider, ClockContextProvider, StopWatchContextProvider, TimerContextProvider } from './contexts'
import { Alarm, Clock, StopWatch, Timer } from './components'

function App() {

    return (
        <Router>
            <div className='app'>
                <h1>Clock APP</h1>
                <nav className='navbar'>
                    <ul>
                        <li> <Link to='/'>Clock</Link></li>
                        <li><Link to='/timer'>Timer</Link></li>
                        <li><Link to='/stopwatch'>StopWatch</Link></li>
                        <li><Link to='/alarm'>Alarm</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path='/'
                        element={
                            <ClockContextProvider>
                                <Clock />
                            </ClockContextProvider>
                        }
                    />
                    <Route
                        path='/timer'
                        element={
                            <TimerContextProvider>
                                <Timer />
                            </TimerContextProvider>
                        }
                    />
                    <Route
                        path='/stopwatch'
                        element={
                            <StopWatchContextProvider>
                                <StopWatch />
                            </StopWatchContextProvider>
                        }
                    />
                    <Route
                        path='/alarm'
                        element={
                            <AlarmContextProvider>
                                <Alarm />
                            </AlarmContextProvider>
                        }
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App
