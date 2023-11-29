import React from 'react'
import Grandchild from './Grandchild'
import {Firstname, Lastname} from '../App'
const Childd = (props) => {
  return (
    <>
    <Firstname.Consumer>
      {fname => <h1>{fname}</h1>}
    </Firstname.Consumer>
    <Lastname.Consumer>
      {lname => <h1>{lname}</h1>}
    </Lastname.Consumer>
    <Grandchild />
    </>
    
  )
}

export default Childd