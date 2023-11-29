import React,{useEffect,useState} from 'react'

const Card = (props,image,subtitle) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `My Count: ${count}` 
  })
  return (
    <>
    <h1>{props.title}</h1>
    <img src={props.image} alt="Image Not Found" />
    <h1>{props.subtitle}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
  )
}

export default Card