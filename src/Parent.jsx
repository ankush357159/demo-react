import React, { createContext, useState } from 'react'
import ChildElement from './ChildElement'



const Parent = () => {
    const [userDetails] = useState({
        name: "Mayank",
        age:30
    })
  return (
    <div>
       <h2>Hello</h2>
    </div>
  )
}

export default Parent