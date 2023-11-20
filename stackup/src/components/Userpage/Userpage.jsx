import React from 'react'
import Sidemenu from './Sidemenu'
import Main from './Main'
import "./userpage.css"
function Userpage() {
    return (
        <div>
            <div className="userpage">
                <Sidemenu />
                <Main />
            </div>
        </div>
    )
}

export default Userpage