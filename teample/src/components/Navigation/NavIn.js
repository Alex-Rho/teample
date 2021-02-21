import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function NavIn() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white mb-5">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="auto" height="60" alt="" loading="lazy" />
            </Link>
            <div class="form-group has-search w-25 m-auto">
                <FontAwesomeIcon className="form-control-feedback mt-2 ml-2" icon={faSearch} />
                <input type="text" class="form-control" placeholder="Search Teample" />
            </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">Post</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Explore</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Sip a tip</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/profile">User</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavIn;