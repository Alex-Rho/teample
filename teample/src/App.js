import React from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

import './App.css';

import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
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

export default App;
