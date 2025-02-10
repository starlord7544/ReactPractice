import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
    const [length, setLength] = useState(6)
    const [allowNum, setAllowNum] = useState(false)
    const [allowChar, setAllowChar] = useState(false)
    const [password, setPassword] = useState("")

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (allowNum)
            str += '0123456789'
        if (allowChar)
            str += '~`!@#$%^&*()_-+={}[]|'
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, allowChar, allowNum, setPassword])

    useEffect(() => {
        passwordGenerator()
    }, [length, allowChar, allowNum, passwordGenerator])

    const passRef = useRef(null)

    const copyToClipboard = useCallback(() => {
        passRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
                <h1 className="text-white text-center my-3">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        ref={passRef}
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='Password'
                        readOnly
                    />
                    <button
                        className=' shadow bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 flex'
                        onClick={copyToClipboard}
                    >copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            id='rangeInput'
                            min={6}
                            max={69}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { Number(setLength(e.target.value)) }}
                        />
                        <label htmlFor="rangeInput">Length : {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            id='numberInput'
                            checked={allowNum}
                            onChange={() => {
                                setAllowNum((prev) => !prev)
                            }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            id='charInput'
                            checked={allowChar}
                            onChange={() => {
                                setAllowChar((prev) => !prev)
                            }}
                        />
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
