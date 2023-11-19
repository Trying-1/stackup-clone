import React, { useEffect, useState } from 'react'

function Navlinks(props) {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const openPopup = () => {

    setPopupOpen(true)
  }
  const closePopup = (e) => {
    e.preventDefault()
    setPopupOpen(false)
  }
  return (
    <div className='nav-links' >
      {isPopupOpen && (
        <div className="popup">
          <form action="submit" className='popup-form'>
            <h3>Log in to StackUp</h3>
            <label htmlFor="email">email</label>
            <input type="text" className="input-field" placeholder='enter your email' />
            <label htmlFor="password">password</label>
            <input type="text" className="input-field" placeholder='password' />
            <p className='forgot-password'>Forgot password?</p>
            <div className="captcha">
              <input type="checkbox" />
              <p>i'm not a robot</p>
              <div className="catpcha-reset">reset</div>
            </div>
            <button className="login">Log in</button>
            <p>Don't have an account? <a href="">Sign Up</a> </p>
          </form>
          <button className='popup-close-btn' onClick={closePopup}>X</button>
        </div>
      )}
      <a href="#" onClick={() => { if (props.name === "Login") { openPopup() } }}>{props.name} </a>

    </div>
  )
}

export default Navlinks