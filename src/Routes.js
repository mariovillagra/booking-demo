import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './views/Login'

const AppRoutes = () => (
  <Router>
    <Switch>
      <Redirect from="/" to="login" exact />
      <Route path="/servicios" exact component={() => <>Service Page</>} />
      <Route path="/clientes" exact component={() => <>Clientes Page</>} />
      <Route path="/productos" exact component={() => <>Propductos Page</>} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </Router>
)

export default AppRoutes
