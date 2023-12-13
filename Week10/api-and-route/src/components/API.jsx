import { useEffect, useState } from 'react'

const API = () => {
        const [data, setData] = useState([])
        useEffect(() => {
            const fetchdata = async ()=>{
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const jsonData = await data.json()
                setData(jsonData)
            }
            fetchdata()
    },[setData])
  return (
    <div>
        <h1>API</h1>
        <ul>
            {data.map((item)=>{
                return(
                    <li key={item.id}>{item.title}</li>
                )
            })}
        </ul>
    </div>
  )
}


export default API