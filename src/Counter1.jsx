import React, { useEffect, useState } from 'react'

const Counter1 = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
    useEffect(()=>{
        console.log("count2 has changed")
        console.log("render!")

        return ()=> console.log('unmounting...')
    },[count2])
  return (
    <div>
      <p>{count1}</p>
      <p>{count2}</p>
      <p>{count3}</p>
      <br />
      <button onClick={()=> setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={()=> setCount2(count2 + 1)}>Increment count2</button>
      <button onClick={()=> setCount3(count3 + 1)}>Increment count3</button>


    </div>
  )
}

export default Counter1