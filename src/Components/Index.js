import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const Index = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {
        setCount((prev)=> prev + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((prev)=> [...prev, "New Todo"])
    },[todos])
  return (
    <>

    <Todos todos={todos} addTodo={addTodo}/>
    <hr />
    Count: {count}
    <button onClick={increment}>+</button>
    
    </>
  )
}

export default Index