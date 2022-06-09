import React, { memo } from 'react'

const Todos = ({todos, addTodo}) => {
    console.log("Child render")
    
    
  return (
    <>
    <h2>My Todos</h2>
    {todos.map((item, index)=> {
        return <p key={index}>{item}</p>
    })}
    <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(Todos)
