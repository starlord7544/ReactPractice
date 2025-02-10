import { useState, useContext } from 'react'
import './App.css'
import MyContextProvider, { MyContext } from "./contents/MyContext"

function App() {
  return (
    <MyContextProvider>
      <GrandParent>
        <Parent>
          <Child>
            <GrandChild>
              Count :
            </GrandChild>
          </Child>
        </Parent>
      </GrandParent>
    </MyContextProvider>
  );
}

export default App

const GrandParent = ({ children }) => {

  return (
    <div>
      <h1>GrandParent</h1>
      {children}
    </div>
  )
}
const Parent = ({ children }) => {

  return (
    <div>
      <h1>Parent</h1>
      {children}
    </div>
  )
}
const Child = ({ children }) => {

  return (
    <div>
      <h1>Child</h1>
      {children}
    </div>
  )
}
const GrandChild = ({ children }) => {
  const { count, setCount } = useContext(MyContext);
  console.log("GrandChild")

  return (
    <div>
      <h1 onClick={() => { setCount((c) => c + 1) }}>GrandChild</h1>
      {`${children} ${count}`}
    </div>
  )
}
