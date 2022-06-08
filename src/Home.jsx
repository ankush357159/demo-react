import React, { useEffect, useState } from "react";

const Home = (props) => {
  const [color, setColor] = useState('red')
  // const [count, setCount] = useState(0)

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setCount(count+1)
  //   },1000)
  // },[count])
//   const [msg="Hi", setMsg] = useState(() => {
//     setTimeout((msg)=>{
//       return (msg + "How are you")
//     },2000)

//   })


//   console.log(props)
//   const greeting = () => {
//     console.log("Hello")
//   }
//   const lazyFunc = () => {
//     setTimeout(greeting, 1000)
   
//   }
  
//   const [name, setName] = useState("");
//   const [arr, setArr] = useState([]);
//   const [fun, setFun] = useState(()=> lazyFunc())
 
 
 
 
//   const add = () => {
//     setArr([
//       ...arr,
//       {
//         id: arr.length ,
//         value: Math.random() * 1000,
//       },
//     ]);
//   };
  return (
    <div>
      
      <h2 style={{p:1, color:color, }} className="pt-5">Hello</h2>
      <button onClick={()=>setColor('blue')}>Click Me!</button>
      

      {/* <h4>Count is incremented <p>{count}</p> times</h4> */}

      {/* <h4>{msg}</h4>
      <button onClick={setMsg}>Click </button>

      <button value={fun} onClick={setFun}>Click Me!</button>
      
      <h1>{props.name}</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter some text'
      />
      <div>
        <strong>{name}</strong>
      </div>
      <button onClick={add}>Click Me</button>
      {arr.map((item) => (
        <div key={item.id}>
          <p>{item.id}&nbsp;{Math.round(item.value)}</p>         
        </div>
      ))} */}
    </div>
  );
};

export default Home;
