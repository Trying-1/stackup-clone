import React from 'react'
import Navlinks from './Navlinks'

function Navbar() {
    return (
        <div className='nav-bar'>
            <h1 className='logo'>Logo here</h1>
            <div className="right-nav">
                <Navlinks name="Home" />
                <Navlinks name="Earn" />
                <Navlinks name="Help" />
                <Navlinks name="Login"/>
                <button className='signUp-btn'>SignUp</button>
            </div>
        </div>
    )
}

export default Navbar