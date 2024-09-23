import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/shoppingbag.png'
import insta from '../Assets/insta.png'
import pintester from '../Assets/pinterest.png'
import whatsapp from '../Assets/whatsapp.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>                
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className="footer-socials">
            <div className="footer-icons-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester} alt="" />    
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" /> 
            </div>
        </div>
        <div className="footer-copyrigth">
            <hr />
            <p>Copyright @ 2024 -All Right Reserved.</p>
        </div>
    </div>
  )
}
