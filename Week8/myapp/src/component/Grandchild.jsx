import React from 'react'
import Card from './Card'
import '../App.css'
import myimage from '../asset/Snapshoot1.png'
import img2 from '../asset/Snapshoot2.png'
import img3 from '../asset/Snapshoot3.png'
const Grandchild = () => {
  return (
    <>
    <div className='bgcss'>Calling from Grandchild</div>
    <div className='flex'>
        <div className='card'>
            <Card title= "Card 1"
            image = {myimage}
            subtitle="This is subtitle 1"/>
        </div>
        <div className='card'>
            <Card title= "Card 2"
            image = {img2}
            subtitle="This is subtitle 2"
            />
        </div>
        <div className='card'>
            <Card title= "Card 3"
            image = {img3}
            subtitle = "This is subtitle 3"/>
        </div>
    </div>
    </>
    
  )
}

export default Grandchild