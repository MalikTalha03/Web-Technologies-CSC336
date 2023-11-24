import React from 'react'
import Childd from './Childd.jsx'
import img from '../asset/Snapshoot1.png'
const Parent = () => {
        const [count, setCount] = React.useState(0);

  return (
    <>
        <h3>You clicked {count} times</h3>
        <div>Calling from Parent</div>
        <button onClick={()=>setCount(count + 1)}>Click ME</button>
        <h1>{}</h1>

    </>
    
  )
}

export default Parent