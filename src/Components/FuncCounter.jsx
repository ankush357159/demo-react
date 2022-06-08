import { useState, useMemo } from 'react';


// export default function FuncCounter() {
//   const [number, setNumber] = useState(1);
//   const [inc, setInc] = useState(0);
//   const factorial = useMemo(() => factorialOf(number), [number]);
//   const onChange = event => {
//     setNumber(Number(event.target.value));
//   };
//   const onClick = () => setInc(i => i + 1);

  
//   return (
//     <div>
//       Factorial of 
//       <input type="number" value={number} onChange={onChange} />
//       is {factorial}
//       <button onClick={onClick}>Re-render</button>
//     </div>
//   );
// }

// function factorialOf(n) {
//   console.log('factorialOf(n) called!');
//   return n <= 0 ? 1 : n * factorialOf(n - 1);
// }
import React from 'react'

const FuncCounter = () => {
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)
  const factorial = useMemo(()=>factorialFun(count), [count])
  // console.log(count)
  return (
    <div className='mx-5 mt-5'>
      <div className='d-inline-block'>
        <button className='d-inline-block btn btn-primary ' onClick={()=>setCount((prev)=>prev + 1)}>+</button>
        <h2 className='d-inline-block align-bottom  mx-2'>{count}</h2>
        <button className='d-inline-block btn btn-danger' onClick={()=>setCount((prev)=>prev - 1)}>-</button>
      </div>
      <div>
      <button className='d-inline-block btn btn-primary ' onClick={()=>setCounter((prev)=>prev + 1)}>+</button>
        <h2 className='d-inline-block mt-2 mx-2'>{counter}</h2>
        <button className='d-inline-block btn btn-danger ' onClick={()=>setCounter((prev)=>prev - 1)}>-</button>
      </div>
      <h4 className='mt-2'>Memo Function</h4>
      <h2 className='ml-4'>{factorial}</h2>
    </div>
  )
}

export default FuncCounter

const factorialFun = (count) => {
  console.log("...calculating")
  for (let i=0; i<500000000;i++ ) {    
    count+=1
  }
  console.log("...calculated")
  return count 
}