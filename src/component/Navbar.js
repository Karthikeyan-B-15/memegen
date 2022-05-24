import React from 'react'
import face from '../assets/Troll Face.png'
import '../css/navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <div className='nav-left'>
        <img src={face} alt='' className='face'/>
        <h2>Meme Generator</h2>
        </div>
        <p>React Course - Project 3</p>
        
    </div>
  )
}

export default Navbar