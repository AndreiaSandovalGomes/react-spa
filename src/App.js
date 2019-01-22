import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Router from './Router'

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>cart</NavLink></li>
    <li><NavLink to='/contact'>contact</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return <div className='page-container'>
    <h1 className='logo'>AleLimp</h1>
    <Navigation />
    <Router />
    </div>
 }
}

export default App;
