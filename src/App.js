import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Error from './components/Error';
import Details from './components/Details';


import Data from './api/defaultData';

class App extends Component {

  constructor(props){
    super(props);

    this.state = Data;
  }

  render() {
    return (
        <Router>
          <React.Fragment>
            <Header />
          <Switch>
            <Route exact path="/" render={() => <Main {...this.state} />} />
            <Route exact path="/details/:id" render={() => <Details {...this.state} />} />
            <Route exact path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
          <Footer />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
