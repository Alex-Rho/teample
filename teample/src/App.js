import React from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

import './App.css';

import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
