import React, { useState } from 'react'

const Func_Counter = () => {
    const [counter, setCounter] = useState(1)
    const decreaseValue = () => {
        if (counter <= 0) {
            return
        } else setCounter(counter - 1)
    }
  return (
    <div>
        <button className='btn-increase' onClick={() => setCounter(counter + 1)}>+</button>
        <div>{counter}</div>
        <button className='btn-decrease' onClick={() => {decreaseValue()}}>-</button>
        <br />

    </div>
  )
}

export default Func_Counter