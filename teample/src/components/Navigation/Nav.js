import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white mb-5">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="auto" height="60" alt="" loading="lazy" />
            </Link>
            <div className="form-group has-search w-50 m-auto rounded-pill">
                <span className="bi bi-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">Post</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Explore</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Sip Link tip</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Log In</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;