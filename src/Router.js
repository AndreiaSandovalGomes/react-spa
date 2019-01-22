import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import ContactPage from './pages/contactpage'

const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/cart' component={CartPage} />
    <Route exact path='/contact' component={ContactPage} />
  </Switch>
)

export default Router
