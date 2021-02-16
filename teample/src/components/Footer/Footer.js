import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Navigation/logo.png';


function Footer() {
    return (
        <div>
            <footer class="footer">
            <img src={logo} width="auto" height="60" alt="" loading="lazy" />
            <p>Copyright &copy; {(new Date().getFullYear())} Teample. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer;