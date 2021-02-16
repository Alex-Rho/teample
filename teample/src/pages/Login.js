import React from 'react';

import Exlog from '../components/Login/Exlog';

function Login() {
    return (
        <div className="mx-auto" style={{width: "450px"}}>
            <div class="card text-center">
                <h2 class="card-title">Login</h2>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="container">
                    <form>
                    <div class="form-group login">
                        <input type="text" class="form-control" id="exampleInputEmail" placeholder="Username or Email" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
                        <label class="form-check-label" for="dropdownCheck2">
                            Remember me
                        </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-dark w-100">Lets go!</button>
                    </form>
                </div>
                <Exlog />
            </div>
        </div>
    );
}

export default Login;