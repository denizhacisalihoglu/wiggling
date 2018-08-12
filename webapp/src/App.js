import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/navigation';
import Home from './routes/home';
import Events from './routes/events';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <main className="{classes.content}">
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;
