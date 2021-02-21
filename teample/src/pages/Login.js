import React from 'react';

import Exlog from '../components/Login/Exlog';

function Login() {
    return (
        <div className="mx-auto" style={{marginTop: "100px", width: "450px"}}>
            <div className="card text-center container log-sign-form">
                <h2 className="card-title login">Login/Sign Up</h2>
                <p className="card-text welcome">Welcome to Teample!</p>
                <Exlog />
            </div>
        </div>
    );
}

export default Login;