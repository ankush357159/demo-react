import React, { useCallback, useState } from 'react'
import MyList from './MyList'

const ParentComponent = () => {
    const [state, setState] = useState(false)
    const [dep] = useState(false)
    console.log("Parent component rendered")

    const handler = useCallback((event)=> {
        console.log("You clicked", event.currentTarget)

    },[dep])

    const statehandler = () => {
        setState(!state)
    }
  return (
    <>
    <button onClick={statehandler}>Change state of parent component</button>
    <MyList handler={handler}/>
    </>
  )
}

export default ParentComponent