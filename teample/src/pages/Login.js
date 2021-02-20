import React from 'react';

import Exlog from '../components/Login/Exlog';
import LogForm from '../components/Login/LogForm';

function Login() {
    return (
        <div className="mx-auto" style={{marginTop: "100px", width: "450px"}}>
            <div className="card text-center container">
                <h2 className="card-title login">Login</h2>
                <p className="card-text welcome">Welcome to Teample!</p>
                <LogForm />
                <Exlog />
                <div class="container mb-3">
                    <a class="dropdown-item" href="/signup">New around here? Sign up</a>
                    <a class="dropdown-item" href="#">Forgot password?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;