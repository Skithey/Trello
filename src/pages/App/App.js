import React from 'react';
import './App.scss';
import {HashRouter as Router, NavLink, withRouter } from 'react-router-dom'



import Header from '../../cmps/Header/Header';
function App() {
  return (
    <Router>
    <div className="App">
    <Header></Header>
    </div>
    </Router>
  );
}

export default App;
