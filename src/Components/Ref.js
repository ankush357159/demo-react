import React, { useRef } from 'react'

const Ref = () => {
    let inputRef = useRef()
    console.log(inputRef)
    const handleInput = () => {
        console.log("handleInput function called")
        inputRef.current.value = "Hi there"
        inputRef.current.focus()
    }
  return (
    <>
        <h1>useRef in React</h1>

        <input type="text" ref={inputRef} />
        <button onClick={handleInput}>Handle Input</button>
    </>
  )
}

export default Ref