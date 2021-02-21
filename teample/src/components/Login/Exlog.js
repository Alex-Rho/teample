import React, { Component } from 'react';

import firebase from "../../firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Exlog extends Component {
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    render() {
        return (
            <div className="container">
                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        );
    } 
}

export default Exlog;