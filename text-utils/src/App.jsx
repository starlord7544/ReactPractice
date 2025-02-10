import './App.css'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'

function App() {
    return (
        <>
            <Navbar title='Text Utilities' aboutText='About' homeText='Home'/>
            <TextArea heading='Enter the text to analyze below'/>
        </>
    )
}

export default App
