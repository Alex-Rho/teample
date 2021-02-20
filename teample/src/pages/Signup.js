import React from 'react';

import Exlog from '../components/Login/Exlog';
import SignForm from '../components/Login/SignForm';

function Signup() {
    return (
        <div className="mx-auto" style={{marginTop: "100px", width: "450px"}}>
            <div className="card text-center container">
                <h2 className="card-title login">Sign Up</h2>
                <p className="card-text welcome">Welcome to Teample!</p>
                <SignForm />
                <Exlog />
            </div>
        </div>
    );
}

export default Signup;