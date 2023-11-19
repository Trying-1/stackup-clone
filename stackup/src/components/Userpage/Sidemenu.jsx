import React from 'react'
import  "./Sidemenu.css"
function Sidemenu() {
    return (
        <div className='sidemenu'>
            <h1 className='logo'>Logo Here</h1>
            <div className="profile-info-box">
                <h6 className="username">Trying</h6>
                <h6 className="balance">Current: ${20}</h6>
                <h6 className="timezone">Timezone: Asia/Kolkata</h6>
            </div>
            <div className="navlinks1">
                <div className="navlink">Home</div>
                <div className="navlink">Profile</div>
                <div className="navlink">Earn</div>
                <div className="navlink">Learn</div>
                <div className="navlink">Calendar</div>
            </div>
            <div className="navlinks2">
                <div className="navlink">Help</div>
                <div className="navlink">T&Cs</div>
            </div>
        </div>
    )
}

export default Sidemenu