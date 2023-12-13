import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <header>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </header>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates.</p>
    </div>
  )
}

export default Home