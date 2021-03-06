import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import './App.css';
import Header from './components/Header';

import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    
    </Router>
  );
};

export default App;