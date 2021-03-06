import React from 'react';
import './App.scss';
import Header from './cmps/Header/Header';
import { HomePage } from './pages/HomePage/HomePage'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { BoardDetails } from './pages/BoardDetails/BoardDetails';
// import CardDetails from './pages/CardDetails/CardDetials';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, fas, far)

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* <Route path="/board/:boardId/card/:cardId?" component={ CardDetails } /> */}
          <Route path="/board/:boardId" component={BoardDetails} />
          <Route path="/" component={HomePage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
