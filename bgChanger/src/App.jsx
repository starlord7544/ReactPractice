import { useState } from 'react'

function App() {
    const [color, setColor] = useState("white")
    const colorArr = ['Red', 'Blue', 'Green', 'Olive', 'Gray', 'Yellow', 'Pink', 'Purple', 'Lavender', 'Black']
    return (
        <>
            <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
                <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2">
                        {
                            colorArr.map(ele =>
                                <button
                                    key={ele}
                                    className='outline-none px-4 rounded-full p-2'
                                    style={{
                                        backgroundColor: ele.toLocaleLowerCase(),
                                        color: ele === 'White' || ele === 'Yellow' || ele === 'Pink' || ele === 'Lavender' ? 'black' : 'white'
                                    }}
                                    onClick={() => setColor(ele.toLocaleLowerCase())}
                                >{ele}</button>
                            )
                        }
                        <button
                            className='outline-none px-4 rounded-full p-2 text-white'
                            style={{
                                background: "linear-gradient(to right, #4facfe, #8e44ad)"
                            }}
                            onClick={() =>
                                setColor(
                                    colorArr[Math.floor(Math.random() * colorArr.length)].toLocaleLowerCase()
                                )
                            }
                        >Random</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
