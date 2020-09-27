import React from 'react';
import './Footer.css'

function Footer() {
    let FA = require("react-fontawesome");


    return (
        <div className="footer-wrapper">
            <div className="copyrightWrapper">
            <p className="copyright">© 2019-2020 Sneakershop</p>
            <a href="#" className="politics">Политика конфиденциальности</a>
            </div>
            <div className="footer-icons-wrapper">
                <a href="https://t.me/selikhov"><FA className='footer-icon telegram' name="telegram" style={{color:'white'}} size='2x'/></a>
                <a href=""><FA className='footer-icon instagram' name="instagram" style={{color:'white'}} size='2x'/></a>
                <FA className='footer-icon' name="cc-visa" style={{color:'white'}} size='2x'/>
                <FA className='footer-icon' name="cc-mastercard" style={{color:'white'}} size='2x'/>
            </div>
        </div>
    )
}

export default Footer;