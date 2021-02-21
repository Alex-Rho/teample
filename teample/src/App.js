import React from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

import './App.css';

import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer';
import NavIn from './components/Navigation/NavIn';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

import firebase from './firebase/firebase';

firebase.analytics().logEvent('notification_received');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: []
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  render() {
    if (this.state.currentUser) {
      return (
        <Router>
          <div className="App">
            <NavIn />
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Footer />
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Footer />
          </div>
        </Router>
      );
    }
  }
}

export default App;
