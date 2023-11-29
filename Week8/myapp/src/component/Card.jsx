import React from 'react'
const Card = (props,image,subtitle) => {
  return (
    <>
    <h1>{props.title}</h1>
    <img src={props.image} alt="Image Not Found" />
    <h1>{props.subtitle}</h1>
    </>
  )
}

export default Card