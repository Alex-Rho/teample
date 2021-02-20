import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Exlog() {
    return (
        <div className="container">
            <button type="button" className="btn btn-outline-dark w-100 mt-3">
            <FontAwesomeIcon className="mr-1" icon={faGoogle} />
                Continue With Google
            </button>
            <button type="button" className="btn btn-outline-dark w-100 mt-3 mb-3">
                <FontAwesomeIcon className="mr-1" icon={faFacebook} />
                Continue With Facebook
            </button>
        </div>
    );
}

export default Exlog;