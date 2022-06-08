import React, { useContext } from 'react'
import { UserDataContext } from './helper/Context'



const SubChildElement = () => {
  const {data, setData} = useContext(UserDataContext)
  console.log(data)
    
  return (
    <div>
     <p>Hobbies: {data.details.hobbies}</p>
      <p>Name of the user: {data.name}</p>
      <p>Age of the user: {data.age}</p>
      
     
        
    </div>
  )
}

export default SubChildElement