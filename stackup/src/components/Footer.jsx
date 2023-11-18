import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <h1 className='logo'>Logo here</h1>
                <div className="medias">
                    <div className="media">1</div>
                    <div className="media">2</div>
                    <div className="media">3</div>
                    <div className="media">4</div>
                </div>
            </div>
            <div className='footer-list'>
                <a href="#" className="footer-content">Help</a>
                <a href="#" className="footer-content">Terms of Service</a>
                <a href="#" className="footer-content">Privacy Policy</a>
                <a href="#" className="footer-content">Terms of Use</a>
            </div>
            <div className="copyright" style={{color:"tomato"}}>StackUp &copy; 2024</div>
        </div>
    )
}

export default Footer