import React, { useState } from 'react';

const TextArea = (props) => {
    const [text, setText] = useState('');
    const countWords = (text) => {
        if (text.trim().length === 0) return 0;
        return text.trim().split(/\s+/).length;
    };
    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">{props.heading}</h1>
                <div className="mb-4">
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={(e) => setText(e.target.value)} >
                    </textarea>
                </div>
                <div className="flex justify-start">
                    <button
                        className="bg-gray-600 text-white py-2 px-4 mx-1 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                        onClick={() => setText(text.toUpperCase())} >
                        Convert to Uppercase
                    </button>
                    <button
                        className="bg-gray-600 text-white py-2 px-4 mx-1 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                        onClick={() => setText(text.toLowerCase())} >
                        Convert to Lowercase
                    </button>
                    <button
                        className="bg-gray-600 text-white py-2 px-4 mx-1 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                        onClick={() => setText('')} >
                        Clear Text
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <h2><strong>Your Text Summary</strong></h2>
                <p>{countWords(text)} words & {text.length} characters</p>
            </div>
            <div className='p-4'>
                <h2><strong>Preview</strong></h2>
                <p className='border p-2 rounded-lg' >{text}</p>
            </div>
        </>
    )
}

export default TextArea