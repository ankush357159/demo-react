import React, { memo, useEffect } from 'react'

const MyList = ({handler}) => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(()=>{
        console.log("Child component rendered")
    },[])

  return (
    <>
    {items.map((item, index)=> {
        return (
            <div key={index} onClick={handler}>
                {item}
            </div>
        )
    })}
    </>
  )
}

export default memo(MyList)