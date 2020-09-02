// import ReactDOM from 'react-dom'
import Header from './cmps/Header/Header';
import  HomePage from './pages/HomePage/HomePage'

import React from 'react';
import './App.scss';
import {HashRouter as Router, Switch , Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab,fas,far)

function App() {
  return (
    <Router>
    <div className="App">
    <Header></Header>
    
    <Switch>
    <Route path="/" component={ HomePage } />
    </Switch>

    </div>
    </Router>
  );
}

export default App;
