import React from 'react';

function LogForm() {
    return (
        <div className="container">
            <form>
            <div className="form-group login">
                <input type="text" className="form-control" id="exampleInputEmail" placeholder="Username or Email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-dark w-100">Lets go!</button>
            </form>
            <hr />
        </div>
    );
}

export default LogForm;