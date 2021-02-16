import React from 'react';

import Exlog from '../components/Login/Exlog';

function Login() {
    return (
        <div className="mx-auto" style={{width: "450px"}}>
            <div className="card text-center">
                <h2 className="card-title">Login</h2>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className="container">
                    <form>
                    <div className="form-group login">
                        <input type="text" className="form-control" id="exampleInputEmail" placeholder="Username or Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                        <label className="form-check-label" for="dropdownCheck2">
                            Remember me
                        </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark w-100">Lets go!</button>
                    </form>
                </div>
                <Exlog />
            </div>
        </div>
    );
}

export default Login;