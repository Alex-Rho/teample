import React from 'react';

function SignForm() {
    return (
        <div className="container">
            <form>
                <div className="form-group signup">
                    <input type="text" className="form-control" id="exampleInputEmail" placeholder="Username" />
                </div>
                <div className="form-group signup">
                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Confirm password" />
                </div>
                <button type="submit" className="btn btn-dark w-100">Lets go!</button>
            </form>
            <hr />
        </div>
    );
}

export default SignForm;