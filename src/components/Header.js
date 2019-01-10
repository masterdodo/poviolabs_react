import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Sidebar from './Sidebar';


export default class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Sidebar />
    <div className="container header">
      <Link to="/"><img src="img/memegenerator-purple.svg" alt="MemeGeneratorHeaderLogo" /></Link>
      <div className="headerButtons">
      <Link to="/login">Login</Link>
      </div>
    </div>
    </React.Fragment>);
  }
}
